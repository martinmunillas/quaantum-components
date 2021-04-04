import React from 'react';
import { Meta, Story } from '@storybook/react';
import UnorderedList, { UnorderedListProps } from './UnorderedList';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import ListItem from '../ListItem/ListItem';

export default {
  title: 'Atoms/UnorderedList',
  component: UnorderedList,
} as Meta;

export const Default: Story<UnorderedListProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <UnorderedList {...args}>
      <ListItem>UnorderedList</ListItem>
      <ListItem>UnorderedList</ListItem>
      <ListItem>UnorderedList</ListItem>
    </UnorderedList>
  </QuaantumProvider>
);

Default.args = {};
