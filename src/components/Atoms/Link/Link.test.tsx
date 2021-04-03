import React from 'react';
import Link from './Link';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<Link {...props} />);

describe('Link', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
