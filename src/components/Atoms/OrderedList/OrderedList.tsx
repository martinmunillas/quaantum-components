import React from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawOl } from '../../HTML/HTML';

export interface OrderedListProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps('OrderedList');
  return <RawOl {...internalProps} {...props} />;
};

export default OrderedList;
