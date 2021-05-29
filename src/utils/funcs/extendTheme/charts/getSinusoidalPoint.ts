import { Coordinate } from './bezierCurve';

interface GetPointOptions {
  x: number;
  a: number;
  start: Coordinate;
  end: Coordinate;
}

export const getSinusoidalPoint = ({ x, a, start, end }: GetPointOptions): Coordinate => {
  const denom = Math.abs(end.x - start.x);
  const X = (1 / denom) * x - start.x / denom;

  const y = X ** a / (X ** a + (1 - X) ** a);

  const Y = Math.abs(start.y - end.y) * y + start.y;
  return { x, y: Y };
};
