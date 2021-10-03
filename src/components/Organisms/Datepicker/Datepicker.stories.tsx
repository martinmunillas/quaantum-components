import React from 'react';
import { Meta, Story } from '@storybook/react';
import Datepicker, { DatepickerProps } from './Datepicker';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import Day from './childs/Day/Day';

export default {
  title: 'Organisms/Datepicker',
  component: Datepicker,
} as Meta;

export const Default: Story<DatepickerProps> = (args) => (
  <>
    <QuaantumProvider theme={theme}>
      <Datepicker {...args} onChange={console.log}>
        {(date, key) => (
          <Day date={date} key={key} _selected={{ bgColor: 'papayawhip' }}>
            {date.day}
          </Day>
        )}
      </Datepicker>
    </QuaantumProvider>
  </>
);

Default.args = { isOpen: true };
