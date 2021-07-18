import React from 'react';
import { useContext, useEffect } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import { QuaantumBase } from '../../../../Base/QuaantumBase';
import { modalCTX } from '../../Modal';

export interface ModalOverlayProps extends QuaantumProps {}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  const [ctx, setCtx] = useContext(modalCTX);
  useEffect(() => {
    setCtx({
      ...ctx,
      Overlay: (
        <QuaantumBase
          bgColor='rgba(0,0,0,.5)'
          position='fixed'
          top='0'
          left='0'
          width='100vw'
          height='100vh'
          display='grid'
          placeItems='center'
          {...props}
        />
      ),
    });
  }, []);
  return null;
};

export default ModalOverlay;
