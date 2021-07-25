import React from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';

export interface ModalHeaderProps extends QuaantumProps {}

const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  return <QuaantumBase as='header' fontSize='1.7em' {...props} />;
};

ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
