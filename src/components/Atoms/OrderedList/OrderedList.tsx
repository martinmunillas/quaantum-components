import React from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawOl } from '../../HTML/HTML';

export interface OrderedListProps extends QuaantumProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'OrderedList');
  return <RawOl {...internalProps} {...props} />;
};

export default OrderedList;
