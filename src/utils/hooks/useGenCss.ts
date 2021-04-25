import { QuaantumProps } from '../../types';
import { dictionary } from '../../dictionary';
import { ColorsCtx } from '../../defaults/theme';
import resolvers from '../resolvers';
import { useTheme } from './useTheme';

export interface Config {
  colors: ColorsCtx;
}

export const genCss = (props: QuaantumProps, config: Config): string => {
  return (
    Object.keys(props)
      .filter((prop) => prop in dictionary)
      .reduce(
        (prev, curr) => `${prev}${dictionary[curr]}${!curr.startsWith('_') ? ':' : ''} ${
          curr in resolvers ? resolvers[curr](props[curr], config) : props[curr]
        };
      `,
        ''
      ) + (props.customCss || '')
  );
};

export const useGenCss = () => {
  const { colors } = useTheme();

  const generate = (props: QuaantumProps) => {
    return genCss(props, { colors });
  };
  return generate;
};

export type GenCss = ReturnType<typeof useGenCss>;
