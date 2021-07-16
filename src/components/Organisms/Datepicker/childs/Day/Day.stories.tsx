import React from 'react';
import { Meta, Story } from '@storybook/react';
import Day, { DayProps } from './Day';
import QuaantumProvider from '../../../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../../../defaults/theme';

export default {
  title: 'Atoms/Day',
  component: Day,
} as Meta;

export const Default: Story<DayProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Day {...args}>{1}</Day>
  </QuaantumProvider>
);

Default.args = {};
