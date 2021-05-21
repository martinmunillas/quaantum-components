import React from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface OrderedListProps extends QuaantumProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  return <QuaantumBase as='ol' styleAs='OrderedList' {...props} />;
};

export default OrderedList;
