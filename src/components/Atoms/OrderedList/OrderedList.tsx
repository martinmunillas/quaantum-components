import React from 'react';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawOl } from '../../HTML/HTML';

export interface OrderedListProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  const internalProps = useBuitInternalProps('OrderedList');
  return <RawOl {...internalProps} {...props} />;
};

export default OrderedList;
