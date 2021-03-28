import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grid, { GridProps } from './Grid';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import Box from '../Box/Box';
import Heading from '../Heading/Heading';

export default {
  title: 'Atoms/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Heading>This component haven't been developed yet</Heading>
    <Grid {...args} width='100%'>
      <Box width='100px' height='100px' bgColor='blue' />
      <Box width='100px' height='100px' bgColor='blue' />
    </Grid>
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {};
