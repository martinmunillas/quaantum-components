import React from 'react';
import Heading from './Heading';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../types';

const setup = (props: Props<typeof Heading>) => render(<Heading {...props} />);

describe('Heading', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
