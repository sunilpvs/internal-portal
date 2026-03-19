import React, { useState, useMemo, useEffect } from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import PageHeader from "../PageHeader";
import { getHolidayCalendarList } from '../../services/sharepoint/holidayCalendarService';
import './HolidayCalendar.css';

const getClosestAvailableMonth = (months, date) => {
  if (months.length === 0) {
    return {
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  }

  const todayMonth = date.getMonth() + 1;
  const todayYear = date.getFullYear();
  const exactMatch = months.find(({ month, year }) => month === todayMonth && year === todayYear);

  if (exactMatch) {
    return exactMatch;
  }

  const sortedByDistance = [...months].sort((a, b) => {
    const distanceA = Math.abs((a.year - todayYear) * 12 + (a.month - todayMonth));
    const distanceB = Math.abs((b.year - todayYear) * 12 + (b.month - todayMonth));

    if (distanceA !== distanceB) {
      return distanceA - distanceB;
    }

    return (b.year * 12 + b.month) - (a.year * 12 + a.month);
  });

  return sortedByDistance[0];
};

function HolidayCalendar() {
  const [allHolidays, setAllHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchHolidayCalendar = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await getHolidayCalendarList();
        const apiData = Array.isArray(response?.data?.data) ? response.data.data : [];

        const normalizedData = apiData
          .map((item, index) => ({
            id: item?.id ?? `${index}`,
            title: item?.title || 'Holiday',
            date: item?.date,
            branches: Array.isArray(item?.branches) ? item.branches : [],
            description: item?.description || ''
          }))
          .filter((item) => !Number.isNaN(new Date(item.date).getTime()));

        if (isMounted) {
          setAllHolidays(normalizedData);
        }
      } catch (fetchError) {
        if (isMounted) {
          setAllHolidays([]);
          setError('Unable to load holiday calendar. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchHolidayCalendar();

    return () => {
      isMounted = false;
    };
  }, []);

  const availableMonths = useMemo(() => {
    const months = new Set();
    allHolidays.forEach((holiday) => {
      const date = new Date(holiday.date);
      const key = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`;
      months.add(key);
    });

    return Array.from(months)
      .sort()
      .reverse()
      .map((key) => {
        const [year, month] = key.split('-');
        return { month: parseInt(month, 10), year: parseInt(year, 10) };
      });
  }, [allHolidays]);

  const todaySelection = useMemo(
    () => getClosestAvailableMonth(availableMonths, new Date()),
    [availableMonths]
  );
  const [selectedMonth, setSelectedMonth] = useState(todaySelection.month);
  const [selectedYear, setSelectedYear] = useState(todaySelection.year);

  const years = useMemo(() => {
    const uniqueYears = new Set();
    availableMonths.forEach(({ year }) => uniqueYears.add(year));
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, [availableMonths]);

  const monthsForSelectedYear = useMemo(() => {
    return availableMonths
      .filter(({ year }) => year === selectedYear)
      .map(({ month }) => month)
      .sort((a, b) => a - b);
  }, [availableMonths, selectedYear]);

  const branchOrder = [
    'Andhra Pradesh and Telangana',
    'Tamilnadu',
    'Maharashtra',
    'Gujarat',
    'Delhi'
  ];

  const branches = useMemo(() => {
    const branchSet = new Set();
    allHolidays.forEach((holiday) => {
      holiday.branches.forEach((branch) => branchSet.add(branch));
    });

    return Array.from(branchSet).sort((a, b) => {
      const indexA = branchOrder.indexOf(a);
      const indexB = branchOrder.indexOf(b);

      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      if (indexA !== -1) {
        return -1;
      }
      if (indexB !== -1) {
        return 1;
      }

      return a.localeCompare(b);
    });
  }, [allHolidays]);

  useEffect(() => {
    setSelectedMonth(todaySelection.month);
    setSelectedYear(todaySelection.year);
  }, [todaySelection.month, todaySelection.year]);

  useEffect(() => {
    if (monthsForSelectedYear.length > 0 && !monthsForSelectedYear.includes(selectedMonth)) {
      setSelectedMonth(monthsForSelectedYear[0]);
    }
  }, [monthsForSelectedYear, selectedMonth]);

  const holidaysData = useMemo(() => {
    return allHolidays
      .filter((holiday) => {
        const holidayDate = new Date(holiday.date);
        return holidayDate.getUTCMonth() + 1 === selectedMonth && holidayDate.getUTCFullYear() === selectedYear;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [allHolidays, selectedMonth, selectedYear]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <Navbar />
      <div className="holiday-calendar-container">
        <PageHeader title="Holiday Calendar" />
        
        <div className="holiday-content">
        {/* Filter Section */}
        <div className="holiday-filter-section">
          <div className="filter-group">
            <label htmlFor="month-filter">Month:</label>
            <select
              id="month-filter"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
              className="filter-select"
              disabled={monthsForSelectedYear.length === 0}
            >
              {monthsForSelectedYear.length === 0 && (
                <option value="">No months</option>
              )}
              {monthsForSelectedYear.map((monthNumber) => (
                <option key={monthNumber} value={monthNumber}>
                  {monthNames[monthNumber - 1]}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="year-filter">Year:</label>
            <select
              id="year-filter"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
              className="filter-select"
              disabled={years.length === 0}
            >
              {years.length === 0 && (
                <option value="">No years</option>
              )}
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Holidays Table */}
        <div className="holiday-table-wrapper">
          {isLoading ? (
            <div className="no-holidays-message">Loading holiday calendar...</div>
          ) : error ? (
            <div className="no-holidays-message">{error}</div>
          ) : holidaysData.length > 0 ? (
            <table className="holiday-table">
              <thead>
                <tr>
                  <th className="th-date">Date</th>
                  <th className="th-reason">Holiday / Festival</th>
                  {branches.map((branch) => (
                    <th key={branch} className="th-branch">
                      <span className="branch-name">{branch}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {holidaysData.map((holiday, index) => (
                  <tr key={holiday.id || index} className="holiday-row">
                    <td className="td-date">{formatDate(holiday.date)}</td>
                    <td className="td-reason">
                      {holiday.title}
                      {holiday.description && (
                        <div className="holiday-description">{holiday.description}</div>
                      )}
                    </td>
                    {branches.map((branch) => (
                      <td key={`${index}-${branch}`} className="td-branch">
                        {holiday.branches.includes(branch) && (
                          <span className="holiday-mark">✓</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-holidays-message">
              No holidays found for {monthNames[selectedMonth - 1] || 'selected month'} {selectedYear}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="holiday-info-section">
          <div className="info-box">
            <h3>📋 About Holiday Calendar</h3>
            <p>
              This calendar displays all company holidays across different branches.
              Holidays are marked with a checkmark (✓) for each branch where they apply.
            </p>
            <p className="info-note">
              <strong>Note:</strong> Use the Month and Year filters to view holidays for specific periods.
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default HolidayCalendar;
