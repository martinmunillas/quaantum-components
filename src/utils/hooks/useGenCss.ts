import { useContext } from 'react';
import { BuitUIProps } from '../../types';
import { genCss } from '../genCss';
import { ctx } from '../providerContext';

export const useGenCss = () => {
  const { colors } = useContext(ctx);

  const generate = (props: BuitUIProps) => {
    return genCss(props, { colors });
  };
  return generate;
};

export type GenCss = ReturnType<typeof useGenCss>;
