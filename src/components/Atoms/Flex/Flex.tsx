import React, { useContext } from 'react';
import { ctx } from '../../Providers/BuitProvider/BuitProvider';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps {}

const Flex: React.FC<FlexProps> = (props) => {
  const { components } = useContext(ctx);
  return <Box {...components.flex.base} {...props} />;
};

export default Flex;
