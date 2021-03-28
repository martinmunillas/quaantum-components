import React, { InputHTMLAttributes } from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawInput } from '../../HTML/HTML';

export interface InputProps extends BuitUIProps, InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  const internalProps = useBuitInternalProps('Input');

  return <RawInput {...internalProps} {...props} />;
};

export default Input;
