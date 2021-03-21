import React from 'react';
import Heading from './Heading';
import { render, screen } from '@testing-library/react';

const setup = (props) => render(<Heading {...props} />);

describe('Heading', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
