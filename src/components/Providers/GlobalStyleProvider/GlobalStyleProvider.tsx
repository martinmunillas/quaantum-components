import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BuitUIProps, Internal } from '../../../types';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { ctx } from '../../../utils/ctx/providerContext';

export interface GlobalCssProviderProps {}

const GlobalCss = createGlobalStyle(
  ([] as unknown) as TemplateStringsArray,
  ({ genCss, componentCtx, ...props }: BuitUIProps & Internal) =>
    Object.entries(props)
      .map(([selector, css]) => (css ? `${selector} {${genCss(css)}}` : ''))
      .reduce((prev, curr) => prev + curr, '')
);

const GlobalCssProvider: React.FC<GlobalCssProviderProps> = () => {
  const context = useContext(ctx);
  const genCss = useGenCss();

  return <GlobalCss {...(context.global || {})} genCss={genCss} componentCtx={{} as any} />;
};

export default GlobalCssProvider;
