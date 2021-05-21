import React, { HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface BoxProps extends QuaantumProps, Omit<HTMLAttributes<Element>, 'color'> {}

const Box: React.FC<BoxProps> = ({ ...props }) => {
  return <QuaantumBase as='div' styleAs='Box' {...props} />;
};

export default Box;
