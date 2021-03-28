import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './Text';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <BuitProvider theme={theme}>
    <Text {...args}>Lorem Ipsum yada yada yada</Text>
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {
  color: 'black',
};
