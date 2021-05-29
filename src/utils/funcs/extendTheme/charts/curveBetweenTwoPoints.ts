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
  for (let i = 0; i < 2; i += 1 / resolution) {
    coordinates.push(getSinusoidalPoint({ start, end, a: tension, x: start.x + i }));
  }

  return coordinates;
};
