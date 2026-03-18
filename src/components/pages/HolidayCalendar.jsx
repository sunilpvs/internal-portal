import React, { useState, useMemo, useEffect } from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import PageHeader from "../PageHeader";
import { getHolidaysByMonth, getAvailableMonths, branches } from '../data/holidaysData';
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
  const availableMonths = getAvailableMonths();
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

  useEffect(() => {
    if (monthsForSelectedYear.length > 0 && !monthsForSelectedYear.includes(selectedMonth)) {
      setSelectedMonth(monthsForSelectedYear[0]);
    }
  }, [monthsForSelectedYear, selectedMonth]);

  const holidaysData = useMemo(() => {
    return getHolidaysByMonth(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
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
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="filter-select"
            >
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
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="filter-select"
            >
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
          {holidaysData.length > 0 ? (
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
                  <tr key={index} className="holiday-row">
                    <td className="td-date">{formatDate(holiday.date)}</td>
                    <td className="td-reason">{holiday.reason}</td>
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
              No holidays found for {monthNames[selectedMonth - 1]} {selectedYear}
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
