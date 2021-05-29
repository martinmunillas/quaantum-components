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
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 450 },
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
