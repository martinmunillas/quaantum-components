---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.defaultStyles.ts
---
import { QuaantumProps } from '../../types';

const normal: QuaantumProps = {};

const variants = {
  normal,
};

const base: QuaantumProps = {};

const defaultVariant = 'normal';

export const <%= h.changeCase.pascalCase(name) %> = {
  variants,
  base,
  defaultVariant,
};
