import React from 'react';
import Text from './Text';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<Text {...props} />);

describe('Text', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
