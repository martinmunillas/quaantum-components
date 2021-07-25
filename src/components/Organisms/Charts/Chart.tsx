import React, { createContext, useReducer } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';
import ChartAxis from './childs/Axis/ChartAxis';
import ChartTitle from './childs/Title/ChartTitle';
import ChartLine from './childs/Line/ChartLine';
import ChartAxes from './childs/Axes/ChartAxes';
import ChartBars from './childs/Bars/ChartBars';

export interface ChartProps extends QuaantumProps {}

const defaultChartCtx = {
  showTitle: true,
  title: 'Chart',
  titleProps: {},
  size: { x: 100, y: 100 },
};

type State = typeof defaultChartCtx;

interface Action {
  type: 'setFields';
  payload: Partial<State>;
}

export const chartCtx = createContext({ state: defaultChartCtx, dispatch: (_: Action) => {} });

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setFields':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

interface ChartChilds {
  Axes: typeof ChartAxes;
  Axis: typeof ChartAxis;
  Bars: typeof ChartBars;
  Line: typeof ChartLine;
  Title: typeof ChartTitle;
}

type Chart = React.FC<ChartProps> & ChartChilds;

const Chart: Chart = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, defaultChartCtx);
  return (
    <chartCtx.Provider value={{ state, dispatch }}>
      <QuaantumBase as='figure' w='fit-content'>
        {state.showTitle && (
          <QuaantumBase as='figcaption' styleAs='Chart.Title' {...state.titleProps}>
            {state.title}
          </QuaantumBase>
        )}
        <QuaantumBase
          as='svg'
          viewBox='0 0 100 100'
          aria-labelledby='title'
          role='img'
          width='400px'
          height='400px'
          {...props}
        >
          <QuaantumBase as='title'>{state.title}</QuaantumBase>
          {children}
        </QuaantumBase>
      </QuaantumBase>
    </chartCtx.Provider>
  );
};

Chart.Line = ChartLine;
Chart.Title = ChartTitle;
Chart.Axes = ChartAxes;
Chart.Axis = ChartAxis;
Chart.Bars = ChartBars;

Chart.displayName = 'Chart';

export default Chart;
