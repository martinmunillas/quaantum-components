import { ColorsCtx } from '../../defaults/theme';

export const getColor = (color: string, colors: ColorsCtx): string => {
  if (typeof color !== 'string') {
    return color;
  }

  const [first, second] = color.split('.');

  if (!(first in colors)) {
    return color;
  }

  const ctx = colors[first];
  if (typeof ctx === 'string') {
    return ctx;
  }
  if (second === undefined) {
    return ctx.main;
  }

  if (!(second in ctx)) {
    return color;
  }

  return ctx[second as 'main' | 'light' | 'dark'];
};
