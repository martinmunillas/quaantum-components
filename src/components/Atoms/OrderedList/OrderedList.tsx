import React from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawOl } from '../../HTML/HTML';

export interface OrderedListProps extends QuaantumUIProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps('OrderedList');
  return <RawOl {...internalProps} {...props} />;
};

export default OrderedList;
