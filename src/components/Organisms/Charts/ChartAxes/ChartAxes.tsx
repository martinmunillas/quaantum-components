import React, { useContext } from 'react';
import { QuaantumProps } from '../../../../css/types';
import { chartCtx } from '../Chart/Chart';
import ChartAxis from '../ChartAxis/ChartAxis';

export interface ChartAxesProps extends QuaantumProps {
  x?: boolean;
  y?: boolean;
}

const ChartAxes: React.FC<ChartAxesProps> = ({ x, y }) => {
  const {
    state: { size },
  } = useContext(chartCtx);
  return (
    <>
      {x && <ChartAxis styleAs='ChartAxes' x1={0} x2={size.x} y1={size.y} y2={size.y} />}
      {y && <ChartAxis styleAs='ChartAxes' x1={0} x2={0} y1={0} y2={size.y} />}
    </>
  );
};

export default ChartAxes;
