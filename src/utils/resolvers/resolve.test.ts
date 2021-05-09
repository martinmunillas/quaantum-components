import { Config, resolve } from './resolve';

const config: Config = {
  colors: {
    red: '#adsfls',
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
    expect(resolve({ _before: { width: 3 } }, config)).toBe(`&::before {width:3px;}`);
  });
});
