import React from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import Box, { BoxProps } from '../Box/Box';

export interface GridProps extends BoxProps {}

const Grid: React.FC<GridProps> = (props) => {
  const internalProps = useQuaantumInternalProps('Grid');
  return <Box {...internalProps} {...props} />;
};

export default Grid;
