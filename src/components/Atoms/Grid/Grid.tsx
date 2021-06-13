import React from 'react';
import Box, { BoxProps } from '../Box/Box';

export interface GridProps extends BoxProps {
  area: BoxProps['gridArea'];
  template: BoxProps['gridTemplate'];
  templateAreas: BoxProps['gridTemplateAreas'];
  templateColumns: BoxProps['gridTemplateColumns'];
  templateRows: BoxProps['gridTemplateRows'];
  autoFlow: BoxProps['gridAutoFlow'];
  autoColumns: BoxProps['gridAutoColumns'];
  autoRows: BoxProps['gridAutoRows'];
  column: BoxProps['gridColumn'];
  columnEnd: BoxProps['gridColumnEnd'];
  columnStart: BoxProps['gridColumnStart'];
  row: BoxProps['gridRow'];
  rowStart: BoxProps['gridRowStart'];
  rowEnd: BoxProps['gridRowEnd'];
}

/**
 * Grid is a Wrapper of the Box component with a grid display by default and
 * access to the component in the theme as "Grid"
 */
const Grid: React.FC<GridProps> = ({
  area = '',
  template = '',
  templateAreas = '',
  templateColumns = '',
  templateRows = '',
  autoFlow = '',
  autoColumns = '',
  autoRows = '',
  column = '',
  columnEnd = '',
  columnStart = '',
  row = '',
  rowStart = '',
  rowEnd = '',
  ...props
}) => {
  return (
    <Box
      styleAs='Grid'
      display='grid'
      gridArea={area}
      gridTemplate={template}
      gridTemplateAreas={templateAreas}
      gridTemplateColumns={templateColumns}
      gridTemplateRows={templateRows}
      gridAutoFlow={autoFlow}
      gridAutoColumns={autoColumns}
      gridAutoRows={autoRows}
      gridColumn={column}
      gridColumnEnd={columnEnd}
      gridColumnStart={columnStart}
      gridRow={row}
      gridRowStart={rowStart}
      gridRowEnd={rowEnd}
      {...props}
    />
  );
};

export default Grid;
