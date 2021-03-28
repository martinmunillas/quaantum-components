import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextArea, { TextAreaProps } from './TextArea';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <TextArea {...args} />
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'QuaantumUI',
};
