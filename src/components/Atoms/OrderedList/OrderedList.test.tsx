import React from 'react';
import OrderedList from './OrderedList';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../types';

const setup = (props: Props<typeof OrderedList>) =>
  render(<OrderedList {...props}>foo</OrderedList>);

describe('OrderedList', () => {
  it('renders', () => {
    setup({});
    expect(screen.getByText('foo'));
  });
});
