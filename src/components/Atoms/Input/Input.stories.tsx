import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <BuitProvider theme={theme}>
    <Input {...args} />
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'BuitUI',
};
