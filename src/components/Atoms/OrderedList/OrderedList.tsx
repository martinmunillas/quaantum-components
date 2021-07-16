import React, { forwardRef } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface OrderedListProps extends QuaantumProps {}

const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>((props) => {
  return <QuaantumBase as='ol' styleAs='OrderedList' {...props} />;
});

export default OrderedList;
