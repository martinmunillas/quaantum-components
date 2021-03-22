import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args}>Heading</Heading>;

export const H1 = Template.bind({});
H1.args = {
  as: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  as: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  as: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  as: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  as: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  as: 'h6',
};
