import React from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawLi } from '../../HTML/HTML';

export interface ListItemProps extends BuitUIProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  const internalProps = useBuitInternalProps('ListItem');
  return <RawLi {...internalProps} {...props} />;
};

export default ListItem;
