import { maxMonthDate } from './maxMonthDate';

type Calendar = number[];

/**
 * Will return an array with the values of the calendar of a specific month
 * @param date a date with the month to get the calendar
 */
export const generateMonthCalendar = (date: Date): Calendar => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const weekDay = date.getDay();
  const day = date.getDate();
  const days: number[] = [];

  // Add all the days of the month
  for (let i = 1; i <= maxMonthDate(year)[month]; i++) {
    days.push(i);
  }
  // Add missing days at the beggining of the calendar
  let missingSpots = 8 - ((day - weekDay) % 7);
  while (missingSpots >= 7) {
    missingSpots -= 7;
  }
  for (let i = 0; i < missingSpots; i++) {
    days.unshift(maxMonthDate(year)[month === 0 ? 11 : month - 1] - i);
  }

  missingSpots = (7 - (days.length % 7)) % 7;
  for (let i = 1; i <= missingSpots; i++) {
    days.push(i);
  }

  return days;
};
