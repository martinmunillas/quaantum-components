import React, { InputHTMLAttributes } from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawInput } from '../../HTML/HTML';

export interface InputProps extends QuaantumUIProps, InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  const internalProps = useQuaantumInternalProps('Input');

  return <RawInput {...internalProps} {...props} />;
};

export default Input;
