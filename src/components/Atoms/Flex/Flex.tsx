import React from 'react';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {}

const Flex: React.FC<FlexProps> = (props) => {
  const internalProps = useBuitInternalProps('Flex');

  return <Box {...internalProps} {...props} />;
};

export default Flex;
