import { QuaantumProps } from '../../types';
import { getColor } from './getColor';
import { Config, resolve } from './resolve';

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
      res = `${prop}${config.units[type]}`;
    } else {
      res = prop;
    }

    return Resolver.general(key)(res, config);
  };
}
