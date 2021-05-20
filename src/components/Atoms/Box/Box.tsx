import React, { HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface BoxProps extends QuaantumProps, HTMLAttributes<Element> {}

const Box: React.FC<BoxProps> = ({ ...props }) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Box');

  return <QuaantumBase as='div' {...internalProps} {...props} />;
};

export default Box;
