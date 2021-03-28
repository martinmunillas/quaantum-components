import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from './Heading';
import BuitProvider from '../../Providers/BuitProvider/BuitProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => (
  <BuitProvider theme={theme}>
    <Heading {...args}>Heading</Heading>
  </BuitProvider>
);

export const H1 = Template.bind({});
H1.args = {
  as: 'h1',
  variant: 'normal',
};

export const H2 = Template.bind({});
H2.args = {
  as: 'h2',
  variant: 'normal',
};

export const H3 = Template.bind({});
H3.args = {
  as: 'h3',
  variant: 'normal',
};

export const H4 = Template.bind({});
H4.args = {
  as: 'h4',
  variant: 'normal',
};

export const H5 = Template.bind({});
H5.args = {
  as: 'h5',
  variant: 'normal',
};

export const H6 = Template.bind({});
H6.args = {
  as: 'h6',
  variant: 'normal',
};
