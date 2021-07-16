import React, { forwardRef, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface OrderedListProps extends QuaantumProps {}

const OrderedList = forwardRef<HTMLOListElement, PropsWithChildren<OrderedListProps>>(
  (props, ref) => {
    return <QuaantumBase as='ol' styleAs='OrderedList' {...props} re={ref} />;
  }
);

export default OrderedList;
