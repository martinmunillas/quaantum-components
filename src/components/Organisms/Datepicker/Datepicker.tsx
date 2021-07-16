import React, { useMemo } from 'react';
import { generateMonthCalendar } from '../../../utils/funcs/datepicker/generateCalendar';

export interface IDate {
  day: number;
  month: number;
  year: number;
}

interface ChildrenOptions {
  date: IDate;
  isSelected: boolean;
}

export interface DatepickerProps {
  children: (options: ChildrenOptions) => React.ReactElement;
  startingDate: IDate | 'today';
}

const Datepicker: React.FC<DatepickerProps> = ({ children, startingDate }) => {
  const newStartingDate: IDate =
    startingDate === 'today' ? { day: new Date().getDate(), month: 0, year: 0 } : startingDate;

  const {calendar} = useMemo(() => generateMonthCalendar(newStartingDate), [newStartingDate]);
  return <>{calendar.map(day => day === -1 ? <div /> : children({date: day})}</>;
};

export default Datepicker;
