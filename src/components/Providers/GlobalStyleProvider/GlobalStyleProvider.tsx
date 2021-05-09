import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { InternalProps, QuaantumProps } from '../../../types';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { useTheme } from '../../../utils/hooks/useTheme';

export interface GlobalCssProviderProps {}

const GlobalCss = createGlobalStyle(
  ([] as unknown) as TemplateStringsArray,
  ({ genCss, componentCtx, ...props }: InternalProps<QuaantumProps>) =>
    Object.entries(props)
      .map(([selector, css]) => (css ? `${selector} {${genCss(css)}}` : ''))
      .reduce((prev, curr) => prev + curr, '')
);

const GlobalCssProvider: React.FC<GlobalCssProviderProps> = () => {
  const context = useTheme();
  console.log('AAA', useGenCss);
  const genCss = useGenCss();

  return <GlobalCss {...(context.global || {})} genCss={genCss} componentCtx={{} as any} />;
};

export default GlobalCssProvider;
