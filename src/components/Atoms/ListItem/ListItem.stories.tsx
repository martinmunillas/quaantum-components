import React from 'react';
import { Meta, Story } from '@storybook/react';
import ListItem, { ListItemProps } from './ListItem';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => (
  <BuitProvider theme={theme}>
    <ListItem {...args}>Lorem Ipsum yada yada yada</ListItem>
  </BuitProvider>
);

export const Default = Template.bind({});
Default.args = {
  color: 'black',
};
