import { ColorsCtx, Components, Global, theme } from '../../../defaults/theme';
import { extendTheme } from './extendTheme';

describe('extendTheme()', () => {
  const colors: ColorsCtx = { red: 'asdf' };

  const font: string = 'asdf';

  const global: Global = {
    '*': {
      color: 'blue',
    },
  };
  const components: Components = {
    Input: {
      base: {
        color: 'red',
      },
      defaultVariant: 'normal',
      variants: {},
    },
  };

  const units = {
    measurement: 'px',
    speed: 's',
  };

  const mainFocus = {
    color: 'red',
  };

  it('should return the default theme', () => {
    expect(extendTheme(theme, {})).toEqual(theme);
  });

  it('should overwrite the default colors', () => {
    expect(extendTheme(theme, { colors })).toEqual({ ...theme, colors });
  });

  it('should overwrite the default font', () => {
    expect(extendTheme(theme, { font })).toEqual({ ...theme, font });
  });

  it('should overwrite the globals', () => {
    expect(extendTheme(theme, { global })).toEqual({ ...theme, global });
  });

  it('should overwrite the only the components overwritten', () => {
    expect(extendTheme(theme, { components })).toEqual({
      ...theme,
      components: { ...theme.components, ...components },
    });
  });

  it('should overwrite all', () => {
    expect(extendTheme(theme, { colors, components, global, font, units, mainFocus })).toEqual({
      colors,
      components: { ...theme.components, ...components },
      global,
      font,
      units,
      mainFocus,
    });
  });
});
