import React from 'react';
import BuitProvider from './BuitProvider';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<BuitProvider {...props} />);

describe('BuitProvider', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
