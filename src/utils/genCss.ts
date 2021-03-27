import { dictionary } from '../defaults';
import { QuaantumUIProps } from '../types';
import resolvers from './resolvers';

export const genCss = (props: QuaantumUIProps): string => {
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
