import React from 'react';
import Button from './Button';
import { render, screen } from '@testing-library/react';

const setup = (props) => render(<Button color='red' {...props} />);

describe('<Button />', () => {
  it('should render', () => {
    setup({ children: 'foo' });
    expect(screen.getByText('foo'));
  });
});
