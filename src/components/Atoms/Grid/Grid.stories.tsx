import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';

storiesOf('Grid', module)
  .add('Default', () => <Grid color='red'>Grid</Grid>)
