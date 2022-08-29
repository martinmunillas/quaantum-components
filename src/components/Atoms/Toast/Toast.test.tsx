import React from 'react';
import Toast, { ToastProps } from './Toast';
import { render, screen } from '@testing-library/react';

const setup = (props: ToastProps) => render(<Toast {...props} />);

describe('Toast', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
