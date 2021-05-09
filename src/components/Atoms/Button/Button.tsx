import React, { ButtonHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawButton } from '../../HTML/HTML';

export interface ButtonProps extends QuaantumProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Button');
  return <RawButton {...internalProps} {...props} />;
};

export default Button;
