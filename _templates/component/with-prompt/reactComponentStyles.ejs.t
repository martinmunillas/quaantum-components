---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.defaultStyles.ts
---
import { QuaantumUIProps } from '../../types';

const normal: QuaantumUIProps = {};

const variants = {
  normal,
};

const base: QuaantumUIProps = {};

const defaultVariant = 'normal';

export const <%= h.changeCase.pascalCase(name) %> = {
  variants,
  base,
  defaultVariant,
};
