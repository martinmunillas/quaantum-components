import React, { forwardRef, HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface BoxProps extends QuaantumProps, Omit<HTMLAttributes<Element>, 'color'> {}

const Box = forwardRef(({ ...props }: BoxProps, ref: React.Ref<HTMLElement>) => {
  return <QuaantumBase as='div' styleAs='Box' {...props} ref={ref} />;
});

export default Box;
