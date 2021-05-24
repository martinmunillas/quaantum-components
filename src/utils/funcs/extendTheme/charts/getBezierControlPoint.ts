import { Coordinate } from './bezierCurve';

export interface BezierControlPointOptions {
  start: Coordinate;
  end: Coordinate;
}

export const getBezierControlPoint = ({
  start,
  end,
}: BezierControlPointOptions): Coordinate | null => {
  const left = { x: start.x, y: end.x };
  const right = { x: end.x, y: start.y };

  if (start.x < end.x) {
    if (start.y < end.y) {
      return right;
    } else if (start.y > end.y) {
      return left;
    } else {
      return null;
    }
  } else if (start.x > end.x) {
    if (start.y < end.y) {
      return left;
    } else if (start.y > end.y) {
      return right;
    } else {
      return null;
    }
  }
  return null;
};
