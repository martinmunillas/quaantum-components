import React from 'react';
import { Meta, Story } from '@storybook/react';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import { ToastConfig, useToast } from './useToast';
import Button from '../Button/Button';

export default {
  title: 'Atoms/Toast',
} as Meta;

export const Default: Story<ToastConfig> = (args) => {
  const { toast, setToast } = useToast();

  return (
    <QuaantumProvider theme={theme}>
      <Button onClick={() => setToast('Hello World', { ...args })}>Open Toast</Button>
      {toast}
    </QuaantumProvider>
  );
};

Default.args = {
  placement: 'top-right',
  duration: 500,
};
