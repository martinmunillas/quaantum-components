import { Coordinate } from './bezierCurve';
import { getSinusoidalPoint } from './getSinusoidalPoint';

interface CurveBetweenTwoPointsOptions {
  tension?: number;
  start: Coordinate;
  end: Coordinate;
  resolution: number;
}

export const curveBetweenTwoPoints = ({
  tension = 2,
  resolution,
  start,
  end,
}: CurveBetweenTwoPointsOptions): Coordinate[] => {
  const coordinates: Coordinate[] = [];
  for (let i = start.x; i < end.x; i += (end.x - start.x) / resolution) {
    coordinates.push(getSinusoidalPoint({ start, end, a: 1/tension, x: i }));
  }

  return coordinates;
};
