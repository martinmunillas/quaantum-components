import React, { createContext } from 'react';
import { Theme, theme as quaantumTheme } from '../../../defaults/theme';

export interface QuaantumProviderProps {
  theme: Theme;
}

export const ctx = createContext(quaantumTheme);

const QuaantumProvider: React.FC<QuaantumProviderProps> = ({ theme = quaantumTheme, children }) => {
  return <ctx.Provider value={theme}>{children}</ctx.Provider>;
};

export default QuaantumProvider;
