/**
 * Holiday Calendar Data Structure
 * 
 * Easy to manage and maintain:
 * - Add new holidays: Add object to holidays array
 * - Add new branches: Add to branches array and update holidays
 * - Remove holidays: Remove from holidays array
 * 
 * Structure:
 * - date: 'YYYY-MM-DD' format
 * - reason: Holiday name/reason
 * - branches: Array of branches where this holiday applies
 */

export const branches = [
  'Andhra Pradesh & Telangana',
  'Tamil Nadu',
  'Maharashtra',
  'Gujarat',
  'Delhi'
];

export const holidays = [
  // January
  {
    date: '2026-01-14',
    reason: 'Makara Sankranthi',
    branches: ['Andhra Pradesh & Telangana', 'Gujarat'],
  },
  {
    date: '2026-01-15',
    reason: 'Makara Sankranthi / Pongal',
    branches: ['Andhra Pradesh & Telangana', 'Tamil Nadu'],
  },
  {
    date: '2026-01-16',
    reason: 'Kanuma / Thiruvalluvar Day',
    branches: ['Andhra Pradesh & Telangana', 'Tamil Nadu'],
  },
  {
    date: '2026-01-26',
    reason: 'Republic Day',
    branches: [
      'Andhra Pradesh & Telangana',
      'Tamil Nadu',
      'Maharashtra',
      'Gujarat',
      'Delhi'
    ],
  },

  // March
  {
    date: '2026-03-04',
    reason: 'Holi',
    branches: ['Maharashtra', 'Delhi', 'Gujarat'],
  },
  {
    date: '2026-03-19',
    reason: 'Ugadi / Gudi Padwa / Id-Ul-Fitr',
    branches: ['Andhra Pradesh & Telangana', 'Maharashtra'],
  },
  {
    date: '2026-03-21',
    reason: 'Id-Ul-Fitr',
    branches: ['Delhi'],
  },

  // April
  {
    date: '2026-04-03',
    reason: 'Good Friday',
    branches: ['Delhi'],
  },
  {
    date: '2026-04-14',
    reason: 'Tamil Nadu New Year',
    branches: ['Tamil Nadu'],
  },

  // May
  {
    date: '2026-05-01',
    reason: 'May Day / Maharashtra Day / Buddha Purnima',
    branches: [
      'Andhra Pradesh & Telangana',
      'Tamil Nadu',
      'Maharashtra',
      'Delhi'
    ],
  },
  {
    date: '2026-05-27',
    reason: 'Bakrid',
    branches: ['Delhi'],
  },

  // August
  {
    date: '2026-08-15',
    reason: 'Independence Day',
    branches: [
      'Andhra Pradesh & Telangana',
      'Tamil Nadu',
      'Maharashtra',
      'Gujarat',
      'Delhi'
    ],
  },

  // September
  {
    date: '2026-09-04',
    reason: 'Janmashtami',
    branches: ['Gujarat'],
  },
  {
    date: '2026-09-14',
    reason: 'Vinayaka Chavithi / Ganesh Chaturthi',
    branches: [
      'Andhra Pradesh & Telangana',
      'Tamil Nadu',
      'Maharashtra'
    ],
  },

  // October
  {
    date: '2026-10-02',
    reason: 'Gandhi Jayanthi',
    branches: [
      'Andhra Pradesh & Telangana',
      'Tamil Nadu',
      'Maharashtra',
      'Gujarat',
      'Delhi'
    ],
  },
  {
    date: '2026-10-20',
    reason: 'Vijaya Dasami / Dussehra',
    branches: [
      'Andhra Pradesh & Telangana',
      'Tamil Nadu',
      'Maharashtra',
      'Gujarat',
      'Delhi'
    ],
  },

  // November
  {
    date: '2026-11-10',
    reason: 'Vikram Samvat New Year',
    branches: ['Gujarat'],
  },
  {
    date: '2026-11-11',
    reason: 'Bhai Duj / Bhai Bij',
    branches: ['Maharashtra', 'Gujarat'],
  },

  // December
  {
    date: '2026-12-25',
    reason: 'Christmas',
    branches: [
      'Andhra Pradesh & Telangana',
      'Tamil Nadu',
      'Maharashtra',
      'Gujarat',
      'Delhi'
    ],
  },
];

/**
 * Helper function to get holidays by month
 * @param {number} month - Month number (1-12)
 * @param {number} year - Year
 * @returns {array} Array of holidays for the specified month
 */
export const getHolidaysByMonth = (month, year) => {
  return holidays.filter((holiday) => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getMonth() + 1 === month && holidayDate.getFullYear() === year;
  });
};

/**
 * Get all unique months that have holidays
 * @returns {array} Array of objects with month and year
 */
export const getAvailableMonths = () => {
  const months = new Set();
  holidays.forEach((holiday) => {
    const date = new Date(holiday.date);
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    months.add(key);
  });
  return Array.from(months)
    .sort()
    .reverse()
    .map((key) => {
      const [year, month] = key.split('-');
      return { month: parseInt(month), year: parseInt(year) };
    });
};
