import React from 'react';
import ListItem from './ListItem';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../types';

const setup = (props: Props<typeof ListItem>) => render(<ListItem {...props}>foo</ListItem>);

describe('ListItem', () => {
  it('renders', () => {
    setup({});
    expect(screen.getByText('foo'));
  });
});
