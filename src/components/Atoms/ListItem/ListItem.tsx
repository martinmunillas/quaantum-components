import React, { forwardRef, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ListItemProps extends QuaantumProps {}

const ListItem = forwardRef<HTMLLIElement, PropsWithChildren<ListItemProps>>((props, ref) => {
  return <QuaantumBase as='li' styleAs='ListItem' {...props} ref={ref} />;
});

ListItem.displayName = 'ListItem';

export default ListItem;
