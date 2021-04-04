import React from 'react';
import { Meta, Story } from '@storybook/react';
import OrderedList, { OrderedListProps } from './OrderedList';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import ListItem from '../ListItem/ListItem';

export default {
  title: 'Atoms/OrderedList',
  component: OrderedList,
} as Meta;

export const Default: Story<OrderedListProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <OrderedList {...args}>
      <ListItem>OrderedList</ListItem>
      <ListItem>OrderedList</ListItem>
      <ListItem>OrderedList</ListItem>
      <ListItem>OrderedList</ListItem>
    </OrderedList>
  </QuaantumProvider>
);

Default.args = {};
