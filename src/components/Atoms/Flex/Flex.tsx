import React from 'react';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {
  direction?: BoxProps['flexDirection'];
  wrap?: BoxProps['flexWrap'];
  shrink?: BoxProps['flexShrink'];
  grow?: BoxProps['flexGrow'];
}

/**
 * Flex is a Wrapper of the Box component, with a flex display by default,
 * access to the component in the theme as "Flex" and
 * some handy shortcuts for flexDirection, flexWrap, flexShrink and flexGrow as
 * direction, wrap, shrink and grow respectively.
 */
const Flex: React.FC<FlexProps> = ({ direction, wrap, grow, shrink, ...props }) => {
  return (
    <Box
      styleAs='Flex'
      display='flex'
      flexDirection={direction}
      flexWrap={wrap}
      flexGrow={grow}
      flexShrink={shrink}
      {...props}
    />
  );
};

export default Flex;
