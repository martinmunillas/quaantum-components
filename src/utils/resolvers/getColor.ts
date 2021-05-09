import { ColorsCtx } from '../../defaults/theme';

export const getColor = (color: string, colors: ColorsCtx): string => {
  const search = color.split('.');
  const current = search.shift();

  if (!current) return color;

  if (current in colors) {
    const found = colors[current];
    if (typeof found === 'string') return found;

    return getColor(search?.join('.'), found);
  }

  return color;
};
