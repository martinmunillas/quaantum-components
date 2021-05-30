import React, { useContext, useEffect } from 'react';
import { chartCtx } from '../Chart/Chart';

export interface ChartTitleProps {
  children: string;
}

const ChartTitle: React.FC<ChartTitleProps> = ({ children }) => {
  const { dispatch } = useContext(chartCtx);
  useEffect(() => {
    dispatch({ type: 'setField', payload: { key: 'title', value: children } });
  }, []);
  return null;
};

export default ChartTitle;
