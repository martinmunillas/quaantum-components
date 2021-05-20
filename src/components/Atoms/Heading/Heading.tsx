import React, { HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface HeadingProps extends QuaantumProps, HTMLAttributes<HTMLHeadingElement> {}

const Heading: React.FC<HeadingProps> = ({ as = 'h1', ...props }) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Heading');

  return <QuaantumBase as='h2' {...internalProps} {...props} />;
};

export default Heading;
