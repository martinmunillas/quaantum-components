import React from 'react';
import Link from './Link';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Link', () => {
  it("renders as a react-router-dom's Link", () => {
    render(
      <BrowserRouter>
        <Link href='/'>foo</Link>
      </BrowserRouter>
    );
    expect(screen.getByText('foo'));
    cleanup();
  });

  it('renders as an anchor when external prop is passed', () => {
    render(
      <Link href='/' external>
        foo
      </Link>
    );
    expect(screen.getByText('foo'));
  });
});
