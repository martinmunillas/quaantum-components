import React from 'react';
import OrderedList from './OrderedList';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<OrderedList {...props} />);

describe('OrderedList', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
