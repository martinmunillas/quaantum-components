---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.defaultStyles.ts
---
import { QuaantumProps } from '../../../css/types';
import { ComponentCtx, VariantsCtx } from '../../../defaults/theme';

const normal: QuaantumProps = {};

const variants: VariantsCtx = {
  normal,
};

const base: QuaantumProps = {};

const defaultVariant = 'normal';

export const <%= h.changeCase.pascalCase(name) %>: ComponentCtx = {
  variants,
  base,
  defaultVariant,
};
