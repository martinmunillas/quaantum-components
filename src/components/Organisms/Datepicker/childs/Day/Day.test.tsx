import React from 'react';
import Day from './Day';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<Day {...props} />);

describe('Day', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
