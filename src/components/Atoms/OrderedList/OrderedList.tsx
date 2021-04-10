import React from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawOl } from '../../HTML/HTML';

export interface OrderedListProps extends BuitUIProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  const internalProps = useBuitInternalProps('OrderedList');
  return <RawOl {...internalProps} {...props} />;
};

export default OrderedList;
