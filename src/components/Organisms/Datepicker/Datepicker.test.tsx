import React from 'react';
import Datepicker from './Datepicker';
import { render, screen } from '@testing-library/react';
import Day from './childs/Day/Day';

const setup = (props: any) =>
  render(<Datepicker {...props}>{(date, key) => <Day date={date} key={key} />}</Datepicker>);

describe('Datepicker', () => {
  it('renders', () => {
    setup({ role: 'datepicker', isOpen: true });
    expect(screen.getByRole('datepicker'));
  });
});
