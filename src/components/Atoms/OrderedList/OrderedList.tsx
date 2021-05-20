import React from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface OrderedListProps extends QuaantumProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'OrderedList');
  return <QuaantumBase as='ol' {...internalProps} {...props} />;
};

export default OrderedList;
