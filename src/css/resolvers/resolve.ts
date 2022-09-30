import { ColorsCtx, Units } from '../../defaults/theme';
import { dictionary } from '../dictionary';
import { QuaantumProps } from '../types';
import { Resolver } from './Resolver';

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
      }, '') +
    (props.customCss || '') +
    Resolver.custom(props.csx, config)
  );
};
