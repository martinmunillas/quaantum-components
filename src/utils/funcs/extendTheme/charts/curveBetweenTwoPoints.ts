import { bezierCurve, Coordinate } from './bezierCurve';
import { getBezierControlPoint } from './getBezierControlPoint';

interface CurveBetweenTwoPointsOptions {
  tension: number;
  start: Coordinate;
  end: Coordinate;
}

export const curveBetweenTwoPoints = ({
  tension,
  start,
  end,
}: CurveBetweenTwoPointsOptions): Coordinate[] => {
  const resolution = 20;

  const middle: Coordinate = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };

  const firstControlPoint = getBezierControlPoint({ start, end: middle });
  const secondControlPoint = getBezierControlPoint({ start: middle, end });

  if (!firstControlPoint || !secondControlPoint) {
    return [start, end];
  }

  const firstHalf = bezierCurve({
    start,
    end: middle,
    resolution,
    bezier: firstControlPoint,
  });
  const secondHalf = bezierCurve({ start: middle, end, resolution, bezier: secondControlPoint });

  return firstHalf.concat(secondHalf);
};
