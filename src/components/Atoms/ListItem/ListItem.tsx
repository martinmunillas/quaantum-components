import React from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface ListItemProps extends QuaantumProps {}

const ListItem: React.FC<ListItemProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'ListItem');
  return <QuaantumBase as='li' {...internalProps} {...props} />;
};

export default ListItem;
