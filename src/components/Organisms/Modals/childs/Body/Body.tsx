import React from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

interface BodyProps extends QuaantumProps {}

const Body: React.FC<BodyProps> = (props) => {
  return <QuaantumBase {...props}></QuaantumBase>;
};

export default Body;
