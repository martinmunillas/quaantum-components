import React from 'react';
import { Meta, Story } from '@storybook/react';
import Flex from './Flex';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';
import { ButtonProps } from '../..';

export default {
  title: 'Atoms/Flex',
  component: Flex,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <BuitProvider theme={theme}>
    <Flex {...args}>Flex</Flex>
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
};
