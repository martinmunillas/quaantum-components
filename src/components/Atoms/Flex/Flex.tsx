import React from 'react';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {
  /**
   * Shorthand for flexDirection in the flex component
   */
  direction?: BoxProps['flexDirection'];
  /**
   * Shorthand for flexWrap in the flex component
   */
  wrap?: BoxProps['flexWrap'];
  /**
   * Shorthand for flexShrink in the flex component
   */
  shrink?: BoxProps['flexShrink'];
  /**
   * Shorthand for flexGrow in the flex component
   */
  grow?: BoxProps['flexGrow'];
  /**
   * Shorthand for flexBasis in the flex component
   */
  basis?: BoxProps['flexBasis'];
  /**
   * Shorthand for justifyContent in the flex component
   */
  justify?: BoxProps['justifyContent'];
  /**
   * Shorthand for alignItems in the flex component
   */
  align?: BoxProps['alignItems'];
}

/**
 * Flex is a Wrapper of the Box component, with a flex display by default,
 * access to the component in the theme as "Flex" and
 * some handy shortcuts for flexDirection, flexWrap, flexShrink and flexGrow as
 * direction, wrap, shrink and grow respectively.
 */
const Flex: React.FC<FlexProps> = ({
  direction = '',
  wrap = '',
  grow = '',
  shrink = '',
  basis = '',
  justify = '',
  align = '',
  ...props
}) => {
  return (
    <Box
      styleAs='Flex'
      display='flex'
      flexDirection={direction}
      flexWrap={wrap}
      flexGrow={grow}
      flexShrink={shrink}
      flexBasis={basis}
      justifyContent={justify}
      alignContent={align}
      {...props}
    />
  );
};

export default Flex;
