import React from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface UnorderedListProps extends QuaantumProps {}

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  return <QuaantumBase as='ul' styleAs='UnorderedList' {...props} />;
};

export default UnorderedList;
