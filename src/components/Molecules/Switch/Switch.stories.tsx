import React from 'react';
import type { Meta, Story } from '@storybook/react';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import Switch from './Switch';
import { SwitchProps } from 'react-router';

export default {
  title: 'Molecules/Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (_args) => (
  <QuaantumProvider theme={theme}>
    <Switch label='hello'></Switch>
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {};
