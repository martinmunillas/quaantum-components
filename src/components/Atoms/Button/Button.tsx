import React, { HTMLAttributes } from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawButton } from '../../HTML/HTML';

export interface ButtonProps extends BuitUIProps, HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const internalProps = useBuitInternalProps('Button');
  return <RawButton {...internalProps} {...props} />;
};

export default Button;
