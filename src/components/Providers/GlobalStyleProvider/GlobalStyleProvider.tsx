import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { useTheme } from '../../../utils/hooks/useTheme';

export interface GlobalCssProviderProps {}

const GlobalCss = createGlobalStyle<{ globalStyles: string }>(
  ([] as unknown) as TemplateStringsArray,
  ({ globalStyles }: { globalStyles: string }) => globalStyles
);

const GlobalCssProvider: React.FC<GlobalCssProviderProps> = () => {
  const context = useTheme();
  const genCss = useGenCss();

  const globalStyles = Object.entries(context.global || {})
    .map(([selector, css]) => (css ? `${selector} {${genCss(css)}}` : ''))
    .reduce((prev, curr) => prev + curr, '');

  return <GlobalCss {...(context.global || {})} globalStyles={globalStyles} />;
};

export default GlobalCssProvider;
