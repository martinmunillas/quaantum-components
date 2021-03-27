import { dictionary } from '../defaults';
import { BuitUIProps } from '../types';
import resolvers from './resolvers';

export const genCss = (props: BuitUIProps): string => {
  return Object.keys(dictionary)
    .filter((key) => props[key])
    .reduce(
      (prev, curr) => `${prev}
        ${dictionary[curr]}${!curr.startsWith('_') ? ':' : ''} ${
        curr in resolvers ? resolvers[curr](props[curr]) : props[curr]
      };`,
      ''
    );
};