import { Meta, Story } from '@storybook/react';
import React from 'react';
import { theme } from '../../../defaults/theme';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <BuitProvider theme={theme}>
    <Button {...args}>Button</Button>
  </BuitProvider>
);

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};
