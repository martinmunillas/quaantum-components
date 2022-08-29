import React, { memo } from 'react';
import Box, { BoxProps } from '../Box/Box';

export interface ToastProps extends BoxProps {
  children?: React.ReactNode;
}

const Toast: React.FC<ToastProps> = ({ children, ...rest }) => {
  return (
    <Box styleAs='Toast' {...rest}>
      {children}
    </Box>
  );
};

export default memo(Toast);
