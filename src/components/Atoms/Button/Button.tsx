import React from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawButton } from '../../HTML/HTML';

export interface ButtonProps extends QuaantumUIProps {}

const Button: React.FC<ButtonProps> = (props) => {
  const internalProps = useQuaantumInternalProps('Button');

  return <RawButton {...internalProps} {...props} />;
};

export default Button;
