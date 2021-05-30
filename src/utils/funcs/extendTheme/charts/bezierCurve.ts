export interface Coordinate {
  x: number;
  y: number;
}

interface BezierCurveOptions {
  start: Coordinate;
  end: Coordinate;
  bezier: Coordinate;
  resolution: number;
}

export const bezierCurve = ({ start, end, bezier, resolution }: BezierCurveOptions) => {
  const curve: Coordinate[] = [];
  for (let t = 0.0; t < 1; t += 1 / resolution) {
    const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * bezier.x + t * t * end.x;
    const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * bezier.y + t * t * end.y;
    curve.push({ x, y });
  }
  console.log(curve);
  return curve;
};
