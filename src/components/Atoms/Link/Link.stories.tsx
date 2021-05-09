import React from 'react';
import { Meta, Story } from '@storybook/react';
import LinkComponent, { LinkProps } from './Link';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Atoms/Link',
  component: LinkComponent,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <BrowserRouter>
      <LinkComponent {...args}>Link</LinkComponent>
    </BrowserRouter>
  </QuaantumProvider>
);

export const Link = Template.bind({});
Link.args = {
  href: '/hello-world',
};

export const Anchor = Template.bind({});
Anchor.args = {
  href: 'https://www.google.com',
  external: true,
};

export const AsButton = Template.bind({});
AsButton.args = {
  href: '/should-look-like-a-button',
  styleAs: 'Button',
};
