import React from 'react';
import { Meta, Story } from '@storybook/react';
import Datepicker, { DatepickerProps } from './Datepicker';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Organisms/Datepicker',
  component: Datepicker,
} as Meta;

export const Default: Story<DatepickerProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Datepicker {...args}>{() => <></>}</Datepicker>
  </QuaantumProvider>
);

Default.args = {};
