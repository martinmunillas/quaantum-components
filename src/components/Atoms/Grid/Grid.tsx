import React from 'react';
import Box, { BoxProps } from '../Box/Box';

export interface GridProps extends BoxProps {}

/**
 * Grid is a Wrapper of the Box component with a grid display by default and
 * access to the component in the theme as "Grid"
 */
const Grid: React.FC<GridProps> = (props) => {
  return <Box styleAs='Grid' display='grid' {...props} />;
};

export default Grid;
