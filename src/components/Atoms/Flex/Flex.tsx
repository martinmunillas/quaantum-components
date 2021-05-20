import React from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {
  direction?: BoxProps['flexDirection'];
  wrap?: BoxProps['flexWrap'];
  shrink?: BoxProps['flexShrink'];
  grow?: BoxProps['flexGrow'];
}

const Flex: React.FC<FlexProps> = ({ direction, ...props }) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Flex');

  return (
    <Box
      {...internalProps}
      {...props}
      flexDirection={direction ? direction : props.flexDirection}
    />
  );
};

export default Flex;
