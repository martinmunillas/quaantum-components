import React from 'react';
import { Theme, theme as quaantumTheme } from '../../../defaults/theme';
import { ctx } from '../../../utils/ctx/providerContext';
import FontProvider from '../FontProvider/FontProvider';
import GlobalCssProvider from '../GlobalStyleProvider/GlobalStyleProvider';

export interface QuaantumProviderProps {
  theme: Theme;
}

const QuaantumProvider: React.FC<QuaantumProviderProps> = ({ theme = quaantumTheme, children }) => {
  return (
    <ctx.Provider value={theme}>
      <GlobalCssProvider />
      <FontProvider />
      {children}
    </ctx.Provider>
  );
};

export default QuaantumProvider;
