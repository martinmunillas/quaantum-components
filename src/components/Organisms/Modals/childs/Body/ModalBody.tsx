import React from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface ModalBodyProps extends QuaantumProps {}

const ModalBody: React.FC<ModalBodyProps> = (props) => {
  return <QuaantumBase {...props}></QuaantumBase>;
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
