import React from 'react';
import { Meta, Story } from '@storybook/react';
import Flex from './Flex';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import { ButtonProps } from '../..';

export default {
  title: 'Atoms/Flex',
  component: Flex,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Flex {...args}>Flex</Flex>
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
};
