import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from './Box';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';
import { ButtonProps } from '../..';

export default {
  title: 'Atoms/Box',
  component: Box,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <BuitProvider theme={theme}>
    <Box {...args} width='100%'>
      <Box width='100px' height='100px' bgColor='blue' />
      <Box width='100px' height='100px' bgColor='red' />
    </Box>
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {};
