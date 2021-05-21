import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HTML } from './HTML';
import QuaantumProvider from '../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../defaults/theme';
import { QuaantumProps } from '../../css/types';

export default {
  title: 'HTML/All',
  component: HTML.div,
} as Meta;

export const div: Story<QuaantumProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <HTML.div {...args} width='100%' />
  </QuaantumProvider>
);

div.args = {
  color: 'red',
  display: 'block',
  justifyContent: 'unset',
};

export const p: Story<QuaantumProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <HTML.p {...args} width='100%'>
      Hello World
    </HTML.p>
  </QuaantumProvider>
);
p.args = {
  color: 'blue',
  display: 'block',
  justifyContent: 'unset',
};

export const h1: Story<QuaantumProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <HTML.h1 {...args} width='100%'>
      Hello World
    </HTML.h1>
  </QuaantumProvider>
);
h1.args = {
  color: 'red',
  display: 'block',
  justifyContent: 'unset',
};
