import React from 'react';
import UnorderedList from './UnorderedList';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../types';

const setup = (props: Props<typeof UnorderedList>) => render(<UnorderedList {...props} />);

describe('UnorderedList', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
