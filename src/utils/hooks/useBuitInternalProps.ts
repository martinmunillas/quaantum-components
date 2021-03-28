import { useContext } from 'react';
import { Internal } from '../../types';
import { ctx } from '../providerContext';
import { useGenCss } from './useGenCss';

export const useBuitInternalProps = (name: string): Internal => {
  const { components } = useContext(ctx);
  const genCss = useGenCss();

  if (!(name in components)) {
    throw new Error(`'${name}' component is not defined in the BuitUI theme`);
  }
  return { genCss, componentCtx: components[name] };
};
