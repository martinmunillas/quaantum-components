import React from 'react';
import Image from './Image';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../types';

const setup = (props: Props<typeof Image>) => render(<Image {...props} data-testid='foo' />);

describe('Image', () => {
  it('renders', () => {
    setup({ src: '', alt: '' });
    expect(screen.getByTestId('foo'));
  });
});
