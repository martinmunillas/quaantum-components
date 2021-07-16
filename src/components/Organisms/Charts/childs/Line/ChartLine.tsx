import React, { useMemo } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { Coordinate } from '../../../../../utils/funcs/charts/bezierCurve';
import { curveGraph } from '../../../../../utils/funcs/charts/curveGraph';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface ChartLineProps extends QuaantumProps {
  items: {
    value: number;
    name: string;
  }[];
  curved?: boolean;
}

const ChartLine: React.FC<ChartLineProps> = ({ items, curved, ...props }) => {
  const max = useMemo(() => items.reduce((prev, curr) => Math.max(prev, curr.value), 0), [items]);
  const min = useMemo(
    () => items.reduce((prev, curr) => Math.min(prev, curr.value) - 1, Infinity),
    [items]
  );

  const points: Coordinate[] = useMemo(
    () =>
      items.map((item, i) => ({
        x: (i * 100) / items.length,
        y: 100 - (98 / (max - min)) * (item.value - min),
      })),
    [items, min, max]
  );

  const rasturizedPoints = useMemo(
    () =>
      (curved ? curveGraph(points) : points).reduce(
        (prev, item) => prev + ` ${item.x},${item.y}`,
        ''
      ),
    [points, curved]
  );
  return (
    <QuaantumBase
      as='polyline'
      styleAs='Chart.Line'
      fill='none'
      points={rasturizedPoints}
      {...props}
    />
  );
};

ChartLine.displayName = 'ChartLine';

export default ChartLine;
