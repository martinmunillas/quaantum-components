import React from 'react';
import QuaantumProvider from './QuaantumProvider';
import { render, screen } from '@testing-library/react';
import { Props } from '../../../types';
import { extendTheme } from '../../../utils/funcs/extendTheme/extendTheme';
import { theme } from '../../../defaults/theme';

const setup = (props: Props<typeof QuaantumProvider>) =>
  render(<QuaantumProvider {...props}>foo</QuaantumProvider>);

describe('QuaantumProvider', () => {
  it('renders', () => {
    setup({ theme: extendTheme(theme, {}) });
    expect(screen.getByText('foo'));
  });
});
