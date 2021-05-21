import React, { ButtonHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ButtonProps
  extends QuaantumProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

const Button: React.FC<ButtonProps> = (props) => {
  return <QuaantumBase as='button' styleAs='Button' {...props} />;
};

export default Button;
