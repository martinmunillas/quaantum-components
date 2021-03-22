import { dictionary } from '../defaults';
import { QuaantumUIProps } from '../types';
import resolvers from './resolvers';

export const genCss = (props: Partial<QuaantumUIProps>): string => {
  return Object.keys(dictionary)
    .filter((key) => props[key])
    .reduce(
      (prev, curr) =>
        `${prev}
        ${dictionary[curr]}: ${curr in resolvers ? resolvers[curr](props[curr]) : props[curr]};`,
      ''
    );
};
