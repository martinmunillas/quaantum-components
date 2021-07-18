import React, { forwardRef, PropsWithChildren, useContext } from 'react';
import { QuaantumProps } from '../../../../../css/types';
import Button from '../../../../Atoms/Button/Button';
import { modalCTX } from '../../Modal';

interface CloseButtonProps extends QuaantumProps {}

const CloseButton = forwardRef<HTMLButtonElement, PropsWithChildren<CloseButtonProps>>(
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

export default CloseButton;
