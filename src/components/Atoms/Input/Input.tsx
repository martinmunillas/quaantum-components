import React, { forwardRef, InputHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface InputProps
  extends QuaantumProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <QuaantumBase as='input' styleAs='Input' {...props} ref={ref} />;
});

export default Input;
