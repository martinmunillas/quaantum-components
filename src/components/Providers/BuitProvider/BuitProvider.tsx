import React, { createContext } from 'react';
import { Theme, theme as buitTheme } from '../../../defaults/theme';

export interface BuitProviderProps {
  theme: Theme;
}

export const ctx = createContext(buitTheme);

const BuitProvider: React.FC<BuitProviderProps> = ({ theme = buitTheme, children }) => {
  return <ctx.Provider value={theme}>{children}</ctx.Provider>;
};

export default BuitProvider;
