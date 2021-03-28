import React from 'react';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import Box, { BoxProps } from '../Box/Box';

export interface GridProps extends BoxProps {}

const Grid: React.FC<GridProps> = (props) => {
  const internalProps = useBuitInternalProps('Grid');
  return <Box {...internalProps} {...props} />;
};

export default Grid;
