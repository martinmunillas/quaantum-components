import { getSinusoidalPoint } from './getSinusoidalPoint';

const samples = [
  {
    a: 2,
    start: {
      x: 30,
      y: 20,
    },
    end: {
      x: 40,
      y: 30,
    },
  },
  {
    a: 3,
    start: {
      x: 80,
      y: 20,
    },
    end: {
      x: 40,
      y: 30,
    },
  },
  {
    a: 1 / 2,
    start: {
      x: 0,
      y: 20,
    },
    end: {
      x: 10,
      y: 50,
    },
  },
  {
    a: 2,
    start: {
      x: 100,
      y: 40,
    },
    end: {
      x: 40,
      y: 100,
    },
  },
];
describe('getSinusoidalPoint()', () => {
  it('should return the starting point if the x is the same as the x of starting point', () => {
    for (const sample of samples) {
      expect(
        getSinusoidalPoint({
          x: sample.start.x,
          ...sample,
        })
      ).toEqual(sample.start);
    }
  });

  it('should return the ending point if the x is the same as the x of the ending point', () => {
    for (const sample of samples) {
      expect(
        getSinusoidalPoint({
          x: sample.end.x,
          ...sample,
        })
      ).toEqual(sample.end);
    }
  });

  it('should return the middle point if the x is the same as the average of the xs', () => {
    for (const sample of samples) {
      expect(
        getSinusoidalPoint({
          x: (sample.end.x + sample.start.x) / 2,
          ...sample,
        })
      ).toEqual({
        x: (sample.end.x + sample.start.x) / 2,
        y: (sample.end.y + sample.start.y) / 2,
      });
    }
  });
});
