import { colors } from '../../defaults';

export const colorResolver = (color: string) => {
  if (color in colors) return colors[color];

  return color;
};
