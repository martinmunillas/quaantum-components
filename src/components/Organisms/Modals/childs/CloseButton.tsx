import React, { useContext } from 'react';
import { QuaantumProps } from '../../../../css/types';
import { QuaantumBase } from '../../../Base/QuaantumBase';
import { modalCTX } from '../Modal';

interface CloseButtonProps extends QuaantumProps {}

const CloseButton: React.FC<CloseButtonProps> = (props) => {
  const [{ handleClose, p }] = useContext(modalCTX);
  return (
    <QuaantumBase
      as='button'
      onClick={handleClose}
      position='absolute'
      top={p}
      right={p}
      type='button'
      {...props}
    />
  );
};

export default CloseButton;
