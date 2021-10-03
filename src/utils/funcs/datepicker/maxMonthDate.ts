import { Tuple } from '../../types';
import { isLeapYear } from './isLeapYear';

export const maxMonthDate = (year: number): Tuple<number, 12> => [
  31,
  isLeapYear(year) ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];
