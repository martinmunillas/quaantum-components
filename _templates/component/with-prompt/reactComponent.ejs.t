---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';

export interface <%= h.changeCase.pascalCase(name) %>Props {}

const <%= h.changeCase.pascalCase(name) %>: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = () => {
  return (
    <></>
  );
}

export default <%= h.changeCase.pascalCase(name) %>