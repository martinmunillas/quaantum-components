import React, { InputHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface InputProps extends QuaantumProps, InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Input');

  return <QuaantumBase as='input' {...internalProps} {...props} />;
};

export default Input;
