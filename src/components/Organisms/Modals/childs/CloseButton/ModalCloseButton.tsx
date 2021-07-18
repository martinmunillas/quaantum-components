import React, { forwardRef, PropsWithChildren, useContext } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import Button from '../../../../Atoms/Button/Button';
import { modalCTX } from '../../Modal';

export interface ModalCloseButtonProps extends QuaantumProps {}

const ModalCloseButton = forwardRef<HTMLButtonElement, PropsWithChildren<ModalCloseButtonProps>>(
  ({ children = 'X', ...props }, ref) => {
    const [{ handleClose, p }] = useContext(modalCTX);
    return (
      <Button
        onClick={handleClose}
        styleAs='Modal.CloseButton'
        variant='unstyled'
        top={p}
        right={p}
        {...props}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);

export default ModalCloseButton;
