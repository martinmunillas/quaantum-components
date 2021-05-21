import { QuaantumProps } from '../../css/types';
import { useTheme } from './useTheme';
import { useCallback } from 'react';
import { resolve } from '../../css/resolvers/resolve';

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
