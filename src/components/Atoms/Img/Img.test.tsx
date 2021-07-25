import React from 'react';
import Img from './Img';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../css/types';

const setup = (props: Props<typeof Img>) => render(<Img {...props} data-testid='foo' />);

describe('Img', () => {
  it('renders', () => {
    setup({ src: '', alt: '' });
    expect(screen.getByTestId('foo'));
  });
});
