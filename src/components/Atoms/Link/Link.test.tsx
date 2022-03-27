import React from 'react';
import Link from './Link';
import { render, screen, cleanup } from '@testing-library/react';
import { Link as RouterLink } from 'react-router-dom';

describe('Link', () => {
  it('renders correctly', () => {
    render(<Link href='/'>foo</Link>);
    expect(screen.getByText('foo'));
    cleanup();
  });
});
