import { dictionary } from '../defaults';
import { ColorsCtx } from '../defaults/theme';
import { BuitUIProps } from '../types';
import resolvers from './resolvers';

export interface Config {
  colors: ColorsCtx;
}

export const genCss = (props: BuitUIProps, config: Config): string => {
  return Object.keys(dictionary)
    .filter((key) => props[key])
    .reduce(
      (prev, curr) => `${prev}
        ${dictionary[curr]}${!curr.startsWith('_') ? ':' : ''} ${
        curr in resolvers ? resolvers[curr](props[curr], config) : props[curr]
      };`,
      ''
    );
};
