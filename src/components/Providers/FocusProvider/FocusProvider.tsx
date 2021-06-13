import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ctx } from '../../../utils/ctx/providerContext';
import { useGenCss } from '../../../utils/hooks/useGenCss';

interface FontProviderProps {}

const FontStyle = createGlobalStyle<{ focus: string }>`
    *:focus {
        ${({ focus }) => focus || ''}
    }
`;

const FontProvider: React.FC<FontProviderProps> = ({}) => {
  const { mainFocus } = useContext(ctx);
  const genCss = useGenCss();

  const focus = genCss(mainFocus);
  return <FontStyle focus={focus} />;
};

export default FontProvider;
