import React from 'react';
import Box from './Box';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<Box {...props} />);

describe('Box', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
