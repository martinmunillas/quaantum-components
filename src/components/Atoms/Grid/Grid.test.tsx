import React from 'react';
import Grid from './Grid';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<Grid {...props} />);

describe('Grid', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
