import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './Text';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Text {...args}>Lorem Ipsum yada yada yada</Text>
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  color: 'black',
};
