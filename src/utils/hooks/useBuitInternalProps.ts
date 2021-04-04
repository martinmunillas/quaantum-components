import { Internal } from '../../types';
import { useGenCss } from './useGenCss';
import { useTheme } from './useTheme';

export const useBuitInternalProps = (name: string): Internal => {
  const { components } = useTheme();
  const genCss = useGenCss();

  if (!(name in components)) {
    throw new Error(
      `'${name}' component is not defined in the BuitUI theme, 
      either define the component in your theme or extend the buit one`
    );
  }
  return { genCss, componentCtx: components[name] };
};
