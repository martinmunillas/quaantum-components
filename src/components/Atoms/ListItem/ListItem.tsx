import React from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawLi } from '../../HTML/HTML';

export interface ListItemProps extends QuaantumProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  const internalProps = useQuaantumInternalProps('ListItem');
  return <RawLi {...internalProps} {...props} />;
};

export default ListItem;
