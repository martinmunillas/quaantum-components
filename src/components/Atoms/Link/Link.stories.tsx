import React from 'react';
import { Meta, Story } from '@storybook/react';
import LinkComponent, { LinkProps } from './Link';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Link',
  component: LinkComponent,
} as Meta;

export const Default: Story<LinkProps> = (args) => (
  <BuitProvider theme={theme}>
    <LinkComponent {...args}>Link</LinkComponent>
  </BuitProvider>
);

Default.args = {
  href: 'www.google.com',
};
