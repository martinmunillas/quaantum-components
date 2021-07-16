import React, { ButtonHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ButtonProps
  extends QuaantumProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <QuaantumBase as='button' styleAs='Button' {...props} ref={ref} />;
});

export default Button;
