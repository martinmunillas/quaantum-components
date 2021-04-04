import { Theme } from '../../../defaults/theme';

export const extendTheme = (theme: Theme, customTheme: Partial<Theme>): Theme => {
  return {
    colors: customTheme.colors || theme.colors,
    components: { ...theme.components, ...customTheme.components },
    global: customTheme.global || theme.global,
    font: customTheme.font || theme.font,
  };
};
