import React from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface ModalFooterProps extends QuaantumProps {}

const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  return <QuaantumBase as='footer' {...props} />;
};

export default ModalFooter;
