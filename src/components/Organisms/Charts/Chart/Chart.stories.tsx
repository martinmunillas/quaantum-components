import React from 'react';
import { Meta, Story } from '@storybook/react';
import Chart, { ChartProps } from './Chart';
import QuaantumProvider from '../../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../../defaults/theme';
import ChartTitle from '../ChartTitle/ChartTitle';
import ChartLine from '../ChartLine/ChartLine';
import ChartAxes from '../ChartAxes/ChartAxes';

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
      <ChartTitle>Line Chart</ChartTitle>
      <ChartLine items={items} />
      <ChartAxes x y />
    </Chart>
  </QuaantumProvider>
);

LineChart.args = {
  color: 'red',
  display: 'block',
  justifyContent: 'unset',
};
