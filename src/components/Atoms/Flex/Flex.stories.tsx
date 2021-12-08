import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Flex, { FlexProps } from './Flex';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import Box from '../Box/Box';

export default {
  title: 'Atoms/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Flex {...args} width='100%'>
      <Box width='100px' height='100px' bgColor='blue' />
      <Box width='100px' height='100px' bgColor='blue' />
    </Flex>
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
  justifyContent: 'space-between',
};
