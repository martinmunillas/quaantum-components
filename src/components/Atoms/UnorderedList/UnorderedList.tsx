import React, { forwardRef } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface UnorderedListProps extends QuaantumProps {}

const UnorderedList = forwardRef<HTMLUListElement, UnorderedListProps>((props) => {
  return <QuaantumBase as='ul' styleAs='UnorderedList' {...props} />;
});

export default UnorderedList;
