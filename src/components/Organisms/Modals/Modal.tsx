import React, { createContext, useState } from 'react';
import { QuaantumBase } from '../../Base/QuaantumBase';
import FocusTrap from 'focus-trap-react';
import Overlay from './childs/Overlay';
import Header from './childs/Header';
import CloseButton from './childs/CloseButton';
import Body from './childs/Body';
import Footer from './childs/Footer';
import { QuaantumProps } from '../../../css/types';

export const modalCTX = createContext<any>({});

export interface ModalProps extends QuaantumProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFocus?: React.RefObject<HTMLElement>;
  onCloseFocus: React.RefObject<HTMLElement>;
}

interface Modal {
  Overlay: typeof Overlay;
  Header: typeof Header;
  CloseButton: typeof CloseButton;
  Body: typeof Body;
  Footer: typeof Footer;
}

const Modal: Modal & React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onOpenFocus,
  onCloseFocus,
  children,
  ...props
}) => {
  const p = '20px';
  const handleClose = () => {
    onClose();
    onCloseFocus.current?.focus();
  };
  const [ctx, setCtx] = useState({ handleClose, p, Overlay: null });
  return isOpen ? (
    <modalCTX.Provider value={[ctx, setCtx]}>
      {ctx.Overlay}
      <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true }}>
        <QuaantumBase
          role='dialog'
          aria-modal='true'
          aria-labelledby='dialog1_label'
          bgColor='white'
          p={p}
          r='10px'
          position='relative'
          m='auto'
          {...props}
        >
          {children}
        </QuaantumBase>
      </FocusTrap>
    </modalCTX.Provider>
  ) : null;
};

Modal.Overlay = Overlay;
Modal.Header = Header;
Modal.CloseButton = CloseButton;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
