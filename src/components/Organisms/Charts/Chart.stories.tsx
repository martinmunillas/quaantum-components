import React from 'react';
import { Meta, Story } from '@storybook/react';
import Chart, { ChartProps } from './Chart';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Organisms/Charts',
  component: Chart,
} as Meta;

const items = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 450 },
  { name: 'Mar', value: 420 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 550 },
  { name: 'Jun', value: 480 },
];

export const LineChart: Story<ChartProps> = () => (
  <QuaantumProvider theme={theme}>
    <Chart>
      <Chart.Title>Line Chart</Chart.Title>
      <Chart.Line items={items} />
      <Chart.Axes x y />
    </Chart>
  </QuaantumProvider>
);

export const BarChart: Story<ChartProps> = () => (
  <QuaantumProvider theme={theme}>
    <Chart height='100px' width='100px'>
      <Chart.Title fontWeight={700} fontSize='1.4rem' textAlign='center'>
        Bar Chart
      </Chart.Title>
      <Chart.Bars items={items}>
        {({ value }) => ({ fill: value >= 500 ? 'green' : value >= 450 ? 'blue' : 'red' })}
      </Chart.Bars>
      <Chart.Axes x y />
    </Chart>
  </QuaantumProvider>
);

export const MixedChart: Story<ChartProps> = () => (
  <QuaantumProvider theme={theme}>
    <Chart>
      <Chart.Title>Bar Chart</Chart.Title>
      <Chart.Bars items={items}>
        {({ value }) => ({ fill: value >= 500 ? 'green' : value >= 450 ? 'blue' : 'red' })}
      </Chart.Bars>
      <Chart.Line items={items} stroke='black' />
      <Chart.Axes x y />
    </Chart>
  </QuaantumProvider>
);
