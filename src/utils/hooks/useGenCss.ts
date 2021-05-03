import { QuaantumProps } from '../../types';
import { dictionary } from '../../dictionary';
import { ColorsCtx } from '../../defaults/theme';
import resolvers from '../resolvers';
import { useTheme } from './useTheme';
import { useCallback } from 'react';

export interface Config {
  colors: ColorsCtx;
}

export const genCss = (props: QuaantumProps, config: Config): string => {
  return (
    Object.keys(props)
      .filter((prop) => prop in dictionary)
      .reduce(
        (prev, curr) => `${prev}${dictionary[curr as keyof typeof dictionary]}${
          !curr.startsWith('_') ? ':' : ''
        } ${
          curr in resolvers
            ? resolvers[curr as keyof typeof resolvers](
                props[curr as keyof QuaantumProps] as any,
                config
              )
            : props[curr as keyof QuaantumProps]
        };
      `,
        ''
      ) + (props.customCss || '')
  );
};

export const useGenCss = () => {
  const { colors } = useTheme();

  const generate = useCallback(
    (props: QuaantumProps) => {
      return genCss(props, { colors });
    },
    [colors]
  );
  return generate;
};

export type GenCss = ReturnType<typeof useGenCss>;
