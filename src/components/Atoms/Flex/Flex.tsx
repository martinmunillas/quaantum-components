import React, { forwardRef, PropsWithChildren } from 'react';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {
  /**
   * Shorthand for flexDirection
   */
  direction?: BoxProps['flexDirection'];
  /**
   * Shorthand for flexWrap
   */
  wrap?: BoxProps['flexWrap'];
  /**
   * Shorthand for flexShrink
   */
  shrink?: BoxProps['flexShrink'];
  /**
   * Shorthand for flexGrow
   */
  grow?: BoxProps['flexGrow'];
  /**
   * Shorthand for flexBasis
   */
  basis?: BoxProps['flexBasis'];
  /**
   * Shorthand for justifyContent
   */
  justify?: BoxProps['justifyContent'];
  /**
   * Shorthand for alignItems
   */
  align?: BoxProps['alignItems'];
}

/**
 * Flex is a Wrapper of the Box component, with a flex display by default,
 * access to the component in the theme as "Flex" and
 * some handy shortcuts for flexDirection, flexWrap, flexShrink and flexGrow as
 * direction, wrap, shrink and grow respectively.
 */
const Flex = forwardRef<HTMLElement, PropsWithChildren<FlexProps>>(
  (
    {
      direction = '',
      wrap = '',
      grow = '',
      shrink = '',
      basis = '',
      justify = '',
      align = '',
      ...props
    },
    ref
  ) => {
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
        alignItems={align}
        {...props}
        ref={ref}
      />
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;
