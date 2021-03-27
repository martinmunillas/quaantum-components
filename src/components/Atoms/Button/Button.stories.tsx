import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};
