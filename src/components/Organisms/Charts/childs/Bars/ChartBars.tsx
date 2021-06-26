import React, { useMemo } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { Coordinate } from '../../../../../utils/funcs/extendTheme/charts/bezierCurve';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface ChartBarsProps {
  items: {
    value: number;
    name: string;
  }[];
  children?: ((options: { value: number }, i: number) => QuaantumProps) | QuaantumProps;
}

const ChartBars = ({ items, children }: ChartBarsProps) => {
  const max = useMemo(() => items.reduce((prev, curr) => Math.max(prev, curr.value), -Infinity), [
    items,
  ]);
  const min = useMemo(
    () => items.reduce((prev, curr) => Math.min(prev, curr.value) - 1, Infinity),
    [items]
  );

  const coords: Coordinate[] = useMemo(
    () =>
      items.map((item, i) => ({
        x: (i * 100) / items.length,
        y: (98 / (max - min)) * (item.value - min),
      })),
    [items, min, max]
  );

  return (
    <>
      {coords.map((coord, i) => {
        const options =
          typeof children === 'function' ? children({ value: items[i].value }, i) : children;
        return (
          <QuaantumBase
            as='rect'
            styleAs='Chart.Bars'
            x={coord.x}
            height={`${coord.y}px`}
            y={100 - coord.y}
            {...options}
          />
        );
      })}
    </>
  );
};

export default ChartBars;
