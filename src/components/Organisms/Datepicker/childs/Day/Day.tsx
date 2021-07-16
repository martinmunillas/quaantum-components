import React from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface DayProps extends QuaantumProps {
  children: number;
}

const Day: React.FC<DayProps> = ({ children, ...props }) => {
  return (
    <QuaantumBase as='button' {...props}>
      {children}
    </QuaantumBase>
  );
};

export default Day;
