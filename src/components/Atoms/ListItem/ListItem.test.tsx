import React from 'react';
import ListItem from './ListItem';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<ListItem {...props} />);

describe('ListItem', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
