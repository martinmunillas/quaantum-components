import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Input {...args} />
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'QuaantumUI',
};
