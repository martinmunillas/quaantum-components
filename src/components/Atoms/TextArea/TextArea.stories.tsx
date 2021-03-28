import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './TextArea';

storiesOf('TextArea', module)
  .add('Default', () => <TextArea color='red'>TextArea</TextArea>)
