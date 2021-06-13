import { Theme } from '../../../defaults/theme';

export const extendTheme = (theme: Theme, customTheme: Partial<Theme>): Theme => {
  return {
    colors: customTheme.colors || theme.colors,
    components: { ...theme.components, ...customTheme.components },
    mainFocus: customTheme.mainFocus || theme.mainFocus,
    global: customTheme.global || theme.global,
    font: customTheme.font || theme.font,
    units: customTheme.units || theme.units,
  };
};
