import { Config } from '../genCss';

export const colorResolver = (color: string, { colors }: Config) => {
  if (color in colors) return colors[color];

  return color;
};
