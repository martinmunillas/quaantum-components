import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextArea, { TextAreaProps } from './TextArea';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <BuitProvider theme={theme}>
    <TextArea {...args} />
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'BuitUI',
};
