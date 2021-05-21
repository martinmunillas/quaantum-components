import React, { InputHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface InputProps
  extends QuaantumProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'> {}

const Input: React.FC<InputProps> = (props) => {
  return <QuaantumBase as='input' styleAs='Input' {...props} />;
};

export default Input;
