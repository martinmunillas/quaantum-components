import React from 'react';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {
  direction?: BoxProps['flexDirection'];
}

const Flex: React.FC<FlexProps> = ({ direction, ...props }) => {
  const internalProps = useBuitInternalProps('Flex');

  return (
    <Box
      {...internalProps}
      {...props}
      flexDirection={direction ? direction : props.flexDirection}
    />
  );
};

export default Flex;
