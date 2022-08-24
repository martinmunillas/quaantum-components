import React, { ReactNode } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface ModalFooterProps extends QuaantumProps {
  children?: ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  return <QuaantumBase as='footer' {...props} />;
};

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
