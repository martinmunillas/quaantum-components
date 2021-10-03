import React, { useContext } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { areIDatesEqual } from '../../../../../utils/funcs/datepicker/areIDatesEqual';
import { QuaantumBase } from '../../../../Base/QuaantumBase';
import { datepickerCtx, IDate } from '../../Datepicker';

export interface DayProps extends QuaantumProps {
  children?: number | string;
  date: IDate;
  _selected?: QuaantumProps;
}

const Day: React.FC<DayProps> = ({ children, date, _selected = {}, ...props }) => {
  const { onSelect, selected, month } = useContext(datepickerCtx);
  return (
    <QuaantumBase
      as='button'
      minW='42px'
      minH='42px'
      b='none'
      disabled={date.month !== month}
      {...props}
      {...(areIDatesEqual(selected, date) && _selected)}
      onClick={() => onSelect(date)}
    >
      {children || date.day}
    </QuaantumBase>
  );
};

export default Day;
