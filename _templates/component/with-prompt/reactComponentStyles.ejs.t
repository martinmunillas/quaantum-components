---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.defaultStyles.ts
---
import { BuitUIProps } from '../../types';

const normal: BuitUIProps = {};

const variants = {
  normal,
};

const base: BuitUIProps = {};

const defaultVariant = 'normal';

export const <%= h.changeCase.pascalCase(name) %> = {
  variants,
  base,
  defaultVariant,
};
