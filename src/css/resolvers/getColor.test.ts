import { getColor } from './getColor';

describe('getColor()', () => {
  it('should return a color when is just a string', () => {
    expect(getColor('red', { red: 'asdflh' })).toBe('asdflh');
  });

  it("should return the inpur color when it wasn't found", () => {
    expect(getColor('asdflh', { red: 'red' })).toBe('asdflh');
  });

  it('should return a color when is nested', () => {
    expect(
      getColor('red.200', {
        red: {
          200: 'asdflh',
        },
      })
    ).toBe('asdflh');
  });

  it('should return a color when is super nested', () => {
    expect(
      getColor('red.200.200', {
        red: {
          200: {
            200: 'asdflh',
          },
        },
      })
    ).toBe('asdflh');
  });

  it('should return a color when is super super nested', () => {
    expect(
      getColor('red.200.200.200.200.200.200', {
        red: {
          200: {
            200: {
              200: {
                200: {
                  200: {
                    200: 'asdflh',
                  },
                },
              },
            },
          },
        },
      })
    ).toBe('asdflh');
  });
});
