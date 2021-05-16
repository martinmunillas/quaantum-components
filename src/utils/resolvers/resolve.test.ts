import { ColorsCtx } from '../../defaults/theme';
import { Config, resolve } from './resolve';

const config: Config = {
  colors: {
    red: '#adsfls',
    blue: {
      500: 'HelloWorld',
    },
    yellow: {
      light: {
        300: 'fadslflhj',
      },
    },
  },
  units: {
    measurement: 'px',
    speed: 's',
  },
};

describe('resolve()', () => {
  it('should return the correct css', () => {
    expect(resolve({}, config)).toBe('');
  });

  it('should return the correct css', () => {
    expect(resolve({ color: 'red' }, config)).toBe(`color:${config.colors.red};`);
  });

  it('should return the correct css', () => {
    expect(resolve({ _before: { color: 'green' } }, config)).toBe(`&::before {color:green;}`);
  });

  it('should return the correct css', () => {
    expect(resolve({ color: 'blue.500' }, config)).toBe(`color:${config.colors.blue[500]};`);
  });

  it('should return the correct css', () => {
    expect(resolve({ color: 'yellow.light.300' }, config)).toBe(
      `color:${(config.colors.yellow as ColorsCtx).light[300]};`
    );
  });

  it('should return the correct css', () => {
    expect(resolve({ _before: { width: 3 } }, config)).toBe(`&::before {width:3px;}`);
  });
});
