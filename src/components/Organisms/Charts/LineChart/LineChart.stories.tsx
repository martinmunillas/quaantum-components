import React from 'react';
import { Meta, Story } from '@storybook/react';
import LineChart, { LineChartProps } from './LineChart';
import { QuaantumProvider } from '../../..';
import { theme } from '../../../..';

export default {
  title: 'Organisms/LineChart',
  component: LineChart,
} as Meta;

const items = [
  { name: 'Jan', value: 450 },
  { name: 'Feb', value: 400 },
  { name: 'Mar', value: 400 },
  { name: 'Apr', value: 200 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 400 },
  { name: 'Jul', value: 500 },
  { name: 'Jan', value: 450 },
  { name: 'Jul', value: 500 },
  { name: 'Mar', value: 300 },
  { name: 'Feb', value: 100 },
  { name: 'Mar', value: 0 },
  { name: 'May', value: 500 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 400 },
  { name: 'Apr', value: 200 },
  { name: 'Jan', value: 450 },
  { name: 'Feb', value: 400 },
  { name: 'Apr', value: 200 },
  { name: 'Jun', value: 400 },
  { name: 'Jul', value: 500 },
];

export const Sharp: Story<LineChartProps<typeof items[number]>> = (args) => (
  <QuaantumProvider theme={theme}>
    <LineChart {...args} items={items}></LineChart>
  </QuaantumProvider>
);

Sharp.args = {
  strokeWidth: 1,
};

export const Curved: Story<LineChartProps<typeof items[number]>> = (args) => (
  <QuaantumProvider theme={theme}>
    <LineChart {...args} items={items} curved></LineChart>
  </QuaantumProvider>
);

Curved.args = {
  strokeWidth: 1,
};
