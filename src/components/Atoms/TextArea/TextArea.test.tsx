import React from 'react';
import TextArea from './TextArea';
import { render, screen } from '@testing-library/react';

const setup = (props) => render(<TextArea {...props} />);

describe('TextArea', () => {
  it('renders', () => {
    setup({ 'data-testid': 'test' });
    expect(screen.getByTestId('test'));
  });
});
