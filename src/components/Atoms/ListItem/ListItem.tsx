import React from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ListItemProps extends QuaantumProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  return <QuaantumBase as='li' styleAs='ListItem' {...props} />;
};

export default ListItem;
