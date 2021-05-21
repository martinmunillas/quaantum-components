import React, { HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface HeadingProps
  extends QuaantumProps,
    Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {}

const Heading: React.FC<HeadingProps> = (props) => {
  return <QuaantumBase as='h2' styleAs='Heading' {...props} />;
};

export default Heading;
