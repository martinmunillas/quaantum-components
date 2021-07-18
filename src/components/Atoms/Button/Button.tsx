import React, { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ButtonProps
  extends QuaantumProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
  return <QuaantumBase as='button' styleAs='Button' type='button' {...props} ref={ref} />;
});

export default Button;
