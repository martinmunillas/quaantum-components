import React from 'react';
import { Meta, Story } from '@storybook/react';
import Img, { ImgProps } from './Img';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';

export default {
  title: 'Atoms/Img',
  component: Img,
} as Meta;

const Template: Story<ImgProps> = (args) => (
  <QuaantumProvider theme={theme}>
    <Img {...args} />
  </QuaantumProvider>
);

export const Default = Template.bind({});
Default.args = {
  src:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wandavision-modern-family-1613760666.png?crop=0.84375xw:1xh;center,top&resize=640:*',
  width: '300px',
  height: '300px',
  objectFit: 'cover',
};
