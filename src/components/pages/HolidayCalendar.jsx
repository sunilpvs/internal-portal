import React, { useState, useMemo, useEffect } from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import PageHeader from "../PageHeader";
import { getHolidayCalendarList } from '../../services/sharepoint/holidayCalendarService';
import './HolidayCalendar.css';

const ALL_MONTHS = Array.from({ length: 12 }, (_, index) => index + 1);

const normalizeBranchNames = (branches) => {
  if (!Array.isArray(branches)) {
    return [];
  }

  const normalized = [];

  branches.forEach((branch) => {
    const value = String(branch || '').trim();
    const lowerValue = value.toLowerCase();

    if (
      lowerValue === 'andhra pradesh and telangana' ||
      lowerValue === 'andhra pradesh & telangana'
    ) {
      normalized.push('Andhra Pradesh', 'Telangana');
      return;
    }

    normalized.push(value);
  });

  return Array.from(new Set(normalized));
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
            branches: normalizeBranchNames(item?.branches),
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

  const [selectedMonth, setSelectedMonth] = useState(() => new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(() => new Date().getFullYear());

  const years = useMemo(() => {
    const uniqueYears = new Set();
    availableMonths.forEach(({ year }) => uniqueYears.add(year));
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, [availableMonths]);

  const branches = useMemo(() => {
    const branchSet = new Set();
    allHolidays.forEach((holiday) => {
      holiday.branches.forEach((branch) => branchSet.add(branch));
    });

    return Array.from(branchSet).sort((a, b) => a.localeCompare(b));
  }, [allHolidays]);

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
            >
              {ALL_MONTHS.map((monthNumber) => (
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
              No holidays this month
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
