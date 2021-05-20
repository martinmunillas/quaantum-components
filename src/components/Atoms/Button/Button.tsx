import React, { ButtonHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface ButtonProps extends QuaantumProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Button');
  return <QuaantumBase as='button' {...internalProps} {...props} />;
};

export default Button;
