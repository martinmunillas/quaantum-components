import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Flex from './Flex';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';
import { Box, ButtonProps } from '../..';

export default {
  title: 'Atoms/Flex',
  component: Flex,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <BuitProvider theme={theme}>
    <Flex {...args} width='100%'>
      <Box width='100px' height='100px' bgColor='blue' />
      <Box width='100px' height='100px' bgColor='blue' />
    </Flex>
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
  justifyContent: 'space-between',
};
