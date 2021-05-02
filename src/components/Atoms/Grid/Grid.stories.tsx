import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grid, { GridProps } from './Grid';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import Box from '../Box/Box';

export default {
  title: 'Atoms/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => {
  console.log(args);
  return (
    <QuaantumProvider theme={theme}>
      <Grid {...args} width='100%'>
        <Box width='100px' height='100px' bgColor='blue' />
        <Box width='100px' height='100px' bgColor='red' />
        <Box width='100px' height='100px' bgColor='yellow' />
        <Box width='100px' height='100px' bgColor='green' />
      </Grid>
    </QuaantumProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
