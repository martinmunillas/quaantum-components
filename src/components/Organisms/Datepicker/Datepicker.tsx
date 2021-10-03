import React, { createContext, useMemo, useState } from 'react';
import { areIDatesEqual } from '../../../utils/funcs/datepicker/areIDatesEqual';
import { generateMonthCalendar } from '../../../utils/funcs/datepicker/generateCalendar';
import { getDate } from '../../../utils/funcs/datepicker/getDate';
import { Tuple } from '../../../utils/types';
import Button from '../../Atoms/Button/Button';
import Flex from '../../Atoms/Flex/Flex';
import Grid from '../../Atoms/Grid/Grid';
import Heading from '../../Atoms/Heading/Heading';
import Modal, { ModalProps } from '../Modals/Modal';

export interface IDate {
  day: number;
  month: number;
  year: number;
}

const days: Tuple<string, 7> = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months: Tuple<string, 12> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export interface DatepickerProps extends ModalProps {
  children: (date: IDate, key: string) => React.ReactElement;
  startingDate?: IDate | Date | 'today';
  onChange: (date: IDate) => void;
}

interface DatepickerCtx {
  onSelect: (date: IDate) => void;
  selected: IDate | null;
  month: number;
}

export const datepickerCtx = createContext<DatepickerCtx>({
  onSelect: () => {},
  selected: null,
  month: 0,
});

const Datepicker: React.FC<DatepickerProps> = ({
  children,
  startingDate = 'today',
  onClose,
  isOpen,
  onChange,
}) => {
  const [selected, setSelected] = useState<IDate | null>(null);
  const [newStartingDate, setNewStartingDate] = useState(
    startingDate === 'today'
      ? new Date()
      : startingDate instanceof Date
      ? startingDate
      : getDate(startingDate)
  );

  const [calendar, month, year] = useMemo(
    () => [
      generateMonthCalendar(newStartingDate),
      newStartingDate.getMonth(),
      newStartingDate.getFullYear(),
    ],
    [newStartingDate]
  );

  const handleSelect = (date: IDate) => {
    if (areIDatesEqual(date, selected)) {
      return setSelected(null);
    }
    setSelected(date);
    onChange(date);
  };

  const isPrevMonth = (day: number, i: number) => i < 7 && day > 7;
  const isNextMonth = (day: number, i: number) => i > calendar.length - 8 && day <= 7;
  const getMonth = (day: number, i: number) =>
    isPrevMonth(day, i) ? month - 1 : isNextMonth(day, i) ? month + 1 : month;

  const onNext = () => {
    setNewStartingDate(new Date(year, month + 1, 1));
  };

  const onPrev = () => {
    setNewStartingDate(new Date(year, month - 1, 1));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} minW='100px' p='30px'>
      <datepickerCtx.Provider value={{ onSelect: handleSelect, selected, month }}>
        <Flex direction='column' alignItems='center'>
          <Flex justify='space-between' w='100%'>
            <Button onClick={onPrev}>{'<'}</Button>
            <Heading>
              {months[month]} {year}
            </Heading>
            <Button onClick={onNext}>{'>'}</Button>
          </Flex>
          <Grid templateColumns='repeat(7, 1fr)' gap='7px'>
            {days.map((day) => (
              <div key={day}>{day}</div>
            ))}
            {calendar.map((day, i) =>
              children(
                {
                  day,
                  month: getMonth(day, i),
                  year,
                },
                '' + day + getMonth(day, i)
              )
            )}
          </Grid>
        </Flex>
      </datepickerCtx.Provider>
    </Modal>
  );
};

export default Datepicker;
