import React from 'react';
import Input from './Input';
import { render, screen } from '@testing-library/react';

const setup = (props) => render(<Input {...props} />);

describe('Input', () => {
  it('renders', () => {
    setup({ placeholder: 'foo', alt: 'test' });
    expect(screen.getByAltText('test'));
  });
});
