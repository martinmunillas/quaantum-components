import React from 'react';
import UnorderedList from './UnorderedList';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../css/types';

const setup = (props: Props<typeof UnorderedList>) =>
  render(<UnorderedList {...props}>foo</UnorderedList>);

describe('UnorderedList', () => {
  it('renders', () => {
    setup({});
    expect(screen.getByText('foo'));
  });
});
