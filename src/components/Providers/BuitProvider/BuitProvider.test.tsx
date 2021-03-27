import React from 'react';
import QuaantumProvider from './QuaantumProvider';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<QuaantumProvider {...props} />);

describe('QuaantumProvider', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
