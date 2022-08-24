import React, { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { QuaantumBase } from '../../Base/QuaantumBase';
import FocusTrap from 'focus-trap-react';
import { QuaantumProps } from '../../../css/types';
import { useToggleScroll } from '../../../utils/hooks/useToggleScroll';
import ErrorCatcher from '../../Utils/ErrorCatcher';
import useOnClickOutside from '../../../utils/hooks/useOnClickOutside';

import Overlay from './childs/Overlay/ModalOverlay';
import Header from './childs/Header/ModalHeader';
import CloseButton from './childs/CloseButton/ModalCloseButton';
import Body from './childs/Body/ModalBody';
import Footer from './childs/Footer/ModalFooter';

export const modalCTX = createContext<any>({});

export interface ModalProps extends QuaantumProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFocus?: React.RefObject<HTMLElement>;
  onCloseFocus?: React.RefObject<HTMLElement>;
  /**
   * Allow scrolling behind the modal
   */
  allowScroll?: boolean;
  children?: ReactNode;
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
  allowScroll,
  children,
  ...props
}) => {
  const p = '20px';
  const handleClose = () => {
    onClose();
    onCloseFocus?.current?.focus();
  };
  const [ctx, setCtx] = useState({ handleClose, p, Overlay: null });

  const [, activateScroll, deactivateScroll] = useToggleScroll();

  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, handleClose);

  useEffect(() => {
    if (!allowScroll) {
      isOpen ? deactivateScroll() : activateScroll();
    }
  }, [isOpen]);

  return isOpen ? (
    <modalCTX.Provider value={[ctx, setCtx]}>
      {ctx.Overlay}
      <ErrorCatcher defaultErrorMessage='You should include some interactive element to close the modal'>
        <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true }}>
          <QuaantumBase
            role='dialog'
            styleAs='Modal'
            aria-modal='true'
            p={p}
            ref={modalRef}
            {...props}
          >
            {children}
          </QuaantumBase>
        </FocusTrap>
      </ErrorCatcher>
    </modalCTX.Provider>
  ) : null;
};

Modal.Overlay = Overlay;
Modal.Header = Header;
Modal.CloseButton = CloseButton;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.displayName = 'Modal';

export default Modal;
