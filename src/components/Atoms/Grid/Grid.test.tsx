import React from 'react';
import Grid from './Grid';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../css/types';

const setup = (props: Props<typeof Grid>) => render(<Grid {...props} />);

describe('Grid', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
