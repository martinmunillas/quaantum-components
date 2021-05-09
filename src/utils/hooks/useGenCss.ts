import { QuaantumProps } from '../../types';
import { useTheme } from './useTheme';
import { useCallback } from 'react';
import { resolve } from '../resolvers/ResolveCss';

export const useGenCss = () => {
  const { colors, units } = useTheme();

  const generate = useCallback(
    (props: QuaantumProps) => {
      return resolve(props, { colors, units });
    },
    [colors, units]
  );
  return generate;
};

export type GenCss = ReturnType<typeof useGenCss>;
