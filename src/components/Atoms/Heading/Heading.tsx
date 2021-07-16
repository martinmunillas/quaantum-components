import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface HeadingProps
  extends QuaantumProps,
    Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {}

const Heading = forwardRef<HTMLHeadingElement, PropsWithChildren<HeadingProps>>((props) => {
  return <QuaantumBase as='h2' styleAs='Heading' {...props} />;
});

export default Heading;
