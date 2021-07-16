import { IDate } from '../../../components/Organisms/Datepicker/Datepicker';
import { maxMonthDate } from './maxMonthDate';

type Calendar = IDate[];

/**
 * Will return an array with the values of the calendar of a specific month
 * @param date a date with the month to get the calendar
 */
export const generateMonthCalendar = (date: Date): Calendar => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const weekDay = date.getDay();
  const day = date.getDate();
  const days: IDate[] = [];

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
    days.unshift({ day: maxMonthDate(year)[month === 0 ? 11 : month - 1] - i });
  }

  // We traverse the array so we can create the matrix
  const calendar: number[][] = [];
  let currentRow: number[] = [];
  for (let i = 0; i < days.length; i++) {
    if (currentRow.length === 7) {
      calendar.push(currentRow);
      currentRow = [];
    }
    currentRow.push(days[i]);
  }
  // We add the missing dates at the end of the calendar
  if (currentRow.length) {
    const missing = 8 - currentRow.length;
    for (let i = 1; i < missing; i++) {
      currentRow.push(i);
    }
    calendar.push(currentRow);
  }
  return {
    month,
    calendar: calendar as Tuple<number, 7>[],
  };
};
