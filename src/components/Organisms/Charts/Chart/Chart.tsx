import React, { createContext, useReducer } from 'react';
import { QuaantumProps } from '../../../../css/types';
import { QuaantumBase } from '../../../Base/QuaantumBase';

export interface ChartProps extends QuaantumProps {}

const defaultChartCtx = { showTitle: true, title: 'Chart', size: { x: 100, y: 100 } };

type State = typeof defaultChartCtx;

interface Action {
  type: 'setField';
  payload: {
    key: keyof State;
    value: State[keyof State];
  };
}

export const chartCtx = createContext({ state: defaultChartCtx, dispatch: (_: Action) => {} });

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setField':
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

const Chart: React.FC<ChartProps> = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, defaultChartCtx);
  return (
    <chartCtx.Provider value={{ state, dispatch }}>
      <QuaantumBase as='figure'>
        {state.showTitle && <QuaantumBase as='figcaption'>{state.title}</QuaantumBase>}
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

export default Chart;
