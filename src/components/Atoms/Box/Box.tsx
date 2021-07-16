import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface BoxProps extends QuaantumProps, Omit<HTMLAttributes<Element>, 'color'> {}

const Box = forwardRef<HTMLElement, PropsWithChildren<BoxProps>>(({ ...props }, ref) => {
  return <QuaantumBase as='div' styleAs='Box' {...props} ref={ref} />;
});

export default Box;
