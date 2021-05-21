import React from 'react';
import Input from './Input';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../css/types';

const setup = (props: Props<typeof Input>) => render(<Input {...props} />);

describe('Input', () => {
  it('renders', () => {
    setup({ placeholder: 'foo', alt: 'test' });
    expect(screen.getByAltText('test'));
  });
});
