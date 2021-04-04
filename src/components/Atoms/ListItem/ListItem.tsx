import React from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawLi } from '../../HTML/HTML';

export interface ListItemProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  const internalProps = useQuaantumInternalProps('ListItem');
  return <RawLi {...internalProps} {...props} />;
};

export default ListItem;
