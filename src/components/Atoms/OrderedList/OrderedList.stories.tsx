import React from 'react';
import { Meta, Story } from '@storybook/react';
import OrderedList, { OrderedListProps } from './OrderedList';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';
import ListItem from '../ListItem/ListItem';

export default {
  title: 'Atoms/OrderedList',
  component: OrderedList,
} as Meta;

export const Default: Story<OrderedListProps> = (args) => (
  <BuitProvider theme={theme}>
    <OrderedList {...args}>
      <ListItem>OrderedList</ListItem>
      <ListItem>OrderedList</ListItem>
      <ListItem>OrderedList</ListItem>
      <ListItem>OrderedList</ListItem>
    </OrderedList>
  </BuitProvider>
);

Default.args = {};
