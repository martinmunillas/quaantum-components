import React from 'react';
import { Theme, theme as buitTheme } from '../../../defaults/theme';
import { ctx } from '../../../utils/providerContext';
import GlobalCssProvider from '../GlobalStyleProvider/GlobalStyleProvider';

export interface BuitProviderProps {
  theme: Theme;
}

const BuitProvider: React.FC<BuitProviderProps> = ({ theme = buitTheme, children }) => {
  return (
    <ctx.Provider value={theme}>
      <GlobalCssProvider />
      {children}
    </ctx.Provider>
  );
};

export default BuitProvider;
