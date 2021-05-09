import { ColorsCtx, Units } from '../../defaults/theme';
import { dictionary } from '../../dictionary';
import { QuaantumProps } from '../../types';

export interface Config {
  colors: ColorsCtx;
  units: Units;
}

export const resolve = (props: QuaantumProps, config: Config): string => {
  return (
    Object.keys(props)
      .filter((prop) => prop in dictionary)
      .reduce((prev, curr) => {
        return (
          prev +
          `${dictionary[curr as keyof typeof dictionary](
            props[curr as keyof QuaantumProps],
            config
          )}`
        );
      }) + (props.customCss || '')
  );
};

export class Resolver {
  static general = (key: string) => (prop: string, _config: Config) => `${key}:${prop};`;

  static pseudo = (key: string) => (props: QuaantumProps, config: Config) =>
    `${key} {${resolve(props, config)}}`;

  static color = (key = 'color') => (prop: string, config: Config) => {
    const general = Resolver.general(key);

    if (prop in config.colors) return general(getColor(prop, config.colors), config);

    return general(prop, config);
  };

  static measurement = (key: string, type: keyof Config['units']) => (
    prop: QuaantumProps['width'],
    config: Config
  ) => {
    let res: string;

    if (!prop) {
      res = '0';
    } else if (typeof prop === 'number') {
      res = `${prop}${type}`;
    } else {
      res = prop;
    }

    return Resolver.general(key)(res, config);
  };
}

const getColor = (color: string, colors: ColorsCtx): string => {
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
