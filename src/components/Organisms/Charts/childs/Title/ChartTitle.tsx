import React, { useContext, useEffect } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { chartCtx } from '../../Chart';

export interface ChartTitleProps extends QuaantumProps {
  children: string;
}

const ChartTitle: React.FC<ChartTitleProps> = ({ children, ...props }) => {
  const { dispatch } = useContext(chartCtx);
  useEffect(() => {
    dispatch({ type: 'setFields', payload: { title: children, titleProps: props } });
  }, [children]);
  return null;
};

ChartTitle.displayName = 'ChartTitle';

export default ChartTitle;
