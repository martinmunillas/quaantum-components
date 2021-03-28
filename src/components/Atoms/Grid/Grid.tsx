import React from 'react';
import Box, { BoxProps } from '../Box/Box';

export interface GridProps extends BoxProps {}

const Grid: React.FC<GridProps> = (props) => {
  return <Box {...props} />;
};

export default Grid;
