import React from 'react';
import Datepicker from './Datepicker';
import { render, screen } from '@testing-library/react';

const setup = (props: any) => render(<Datepicker {...props} />);

describe('Datepicker', () => {
  it('renders', () => {
    setup({ role: 'datepicker' });
    expect(screen.getByRole('foo'));
  });
});
