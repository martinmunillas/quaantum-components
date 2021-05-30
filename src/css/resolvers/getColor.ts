import { ColorsCtx } from '../../defaults/theme';

export const getColor = (color: string, colors: ColorsCtx, full = color): string => {
  if (typeof color !== 'string') {
    return color;
  }
  const search = color.split('.');
  const current = search.shift();

  if (!current) return full;

  if (current in colors) {
    const found = colors[current];
    if (typeof found === 'string') return found;

    return getColor(search.join('.'), found, full);
  }

  return full;
};
