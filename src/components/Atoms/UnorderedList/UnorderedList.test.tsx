import React from 'react';
import UnorderedList from './UnorderedList';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<UnorderedList {...props} />);

describe('UnorderedList', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});