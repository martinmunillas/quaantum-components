import { Coordinate } from './bezierCurve';

interface GetPointOptions {
  /**
   * the x to be evaluated
   */
  x: number;
  /**
   * how steep the curve will be, should be greater than 0
   */
  a: number;
  /**
   * the starting point
   */
  start: Coordinate;
  /**
   * the ending point
   */
  end: Coordinate;
}

/**
 * given a starting and ending point this function will return the
 * point for a specific x in a sinoidal between the two points
 * https://www.geogebra.org/graphing/rqedbrdd
 */
export const getSinusoidalPoint = ({ x, a, start, end }: GetPointOptions): Coordinate => {
  const denom = end.x - start.x;
  const X = (1 / denom) * x - start.x / denom;

  const y = X ** a / (X ** a + (1 - X) ** a);

  const Y = (end.y - start.y) * y + start.y;
  return { x, y: Y };
};
