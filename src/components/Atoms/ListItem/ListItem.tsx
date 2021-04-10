import React from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawLi } from '../../HTML/HTML';

export interface ListItemProps extends QuaantumUIProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  const internalProps = useQuaantumInternalProps('ListItem');
  return <RawLi {...internalProps} {...props} />;
};

export default ListItem;
