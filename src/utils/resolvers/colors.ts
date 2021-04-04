import { Config } from '../hooks/useGenCss';

export const colorResolver = (color: string, { colors }: Config) => {
  if (color in colors) return colors[color];

  return color;
};
