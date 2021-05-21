import React from 'react';
import TextArea from './TextArea';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../css/types';

const setup = (props: Props<typeof TextArea>) => render(<TextArea {...props} data-testid='test' />);

describe('TextArea', () => {
  it('renders', () => {
    setup({});
    expect(screen.getByTestId('test'));
  });
});
