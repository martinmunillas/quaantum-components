---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.test.tsx
---
import React from 'react';
import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';
import { render, screen } from '@testing-library/react';


const setup = (props) => render(<<%= h.changeCase.pascalCase(name) %> {...props} />);

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
