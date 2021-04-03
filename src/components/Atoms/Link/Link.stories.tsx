import React from 'react';
import { Meta, Story } from '@storybook/react';
import LinkComponent, { LinkProps } from './Link';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Link',
  component: LinkComponent,
} as Meta;

export const Default: Story<LinkProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <LinkComponent {...args}>Link</LinkComponent>
  </QuaantumProvider>
);

Default.args = {
  href: 'www.google.com',
};
