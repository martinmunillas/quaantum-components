import { Coordinate } from './bezierCurve';
import { curveBetweenTwoPoints } from './curveBetweenTwoPoints';

type Graph = Coordinate[];

export const curveGraph = (graph: Graph): Graph => {
  let curved: Coordinate[] = [];
  for (let i = 1; i < graph.length; i++) {
    curved = curved.concat(
      curveBetweenTwoPoints({
        start: graph[i - 1],
        end: graph[i],
        tension: 0.3,
        resolution: 20,
      })
    );
  }
  return curved;
};
