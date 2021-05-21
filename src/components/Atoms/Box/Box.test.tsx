import React from 'react';
import Box from './Box';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../css/types';

const setup = (props: Props<typeof Box>) => render(<Box {...props} />);

describe('Box', () => {
  it('renders', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
