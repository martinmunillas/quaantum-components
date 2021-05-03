import React from 'react';
import Flex from './Flex';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../types';

const setup = (props: Props<typeof Flex>) => render(<Flex {...props} />);

describe('Flex', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
