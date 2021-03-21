import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module).add(
  'Black',
  (options) => <Heading color={options.color || 'black'}>Heading</Heading>,
  {
    color: 'red',
  }
);
