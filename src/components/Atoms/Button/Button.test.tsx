import React from 'react';
import { default as Button } from './Button';
import { render, screen } from '@testing-library/react';

const setup = (props) => render(<Button color='red' {...props} />);

describe('Button', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
