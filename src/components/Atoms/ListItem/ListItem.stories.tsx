import React from 'react';
import { Meta, Story } from '@storybook/react';
import ListItem, { ListItemProps } from './ListItem';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <ListItem {...args}>Lorem Ipsum yada yada yada</ListItem>
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  color: 'black',
};
