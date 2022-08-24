import React, { ReactNode } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface ModalBodyProps extends QuaantumProps {
  children?: ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = (props) => {
  return <QuaantumBase {...props}></QuaantumBase>;
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
