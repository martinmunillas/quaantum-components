import React from 'react';
import Image from './Image';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<Image {...props} />);

describe('Image', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
