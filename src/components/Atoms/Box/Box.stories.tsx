import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box, { BoxProps } from './Box';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Box {...args} width='100%'>
      <Box width='100px' height='100px' bgColor='blue' />
      <Box width='100px' height='100px' bgColor='red' />
    </Box>
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  bgColor: 'unset',
  display: 'block',
  justifyContent: 'unset',
};
