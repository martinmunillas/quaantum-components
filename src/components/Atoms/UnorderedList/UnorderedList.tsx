import React, { forwardRef, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface UnorderedListProps extends QuaantumProps {}

const UnorderedList = forwardRef<HTMLUListElement, PropsWithChildren<UnorderedListProps>>(
  (props, ref) => {
    return <QuaantumBase as='ul' styleAs='UnorderedList' {...props} ref={ref} />;
  }
);

export default UnorderedList;
