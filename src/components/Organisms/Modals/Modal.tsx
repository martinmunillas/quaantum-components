import React from 'react';
import Button from '../../Atoms/Button/Button';
import { QuaantumBase } from '../../Base/QuaantumBase';
import FocusTrap from 'focus-trap-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFocus: React.Ref<HTMLElement>;
  onCloseFocus: React.Ref<HTMLElement>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onOpenFocus, onCloseFocus }) => {
  const p = '20px';
  const handleClose = () => {
    onCloseFocus?.current.focus();
    onClose();
  };
  return isOpen ? (
    <>
      <QuaantumBase
        bgColor='rgba(0,0,0,.1)'
        position='fixed'
        top='0'
        left='0'
        width='100vw'
        height='100vh'
        display='grid'
        placeItems='center'
      >
        <FocusTrap>
          <QuaantumBase
            role='dialog'
            aria-modal='true'
            aria-labeledby='dialog1_label'
            bgColor='white'
            p={p}
            r='10px'
            position='relative'
          >
            <QuaantumBase as='header' fontSize='1.7em'>
              Hello World
            </QuaantumBase>
            <QuaantumBase as='button' onClick={handleClose} position='absolute' top={p} right={p}>
              X
            </QuaantumBase>
            <QuaantumBase>Hello world asfjdkasf;jlksfad;ljsfad</QuaantumBase>

            <QuaantumBase as='footer'>
              <Button>Hello World</Button>
            </QuaantumBase>
          </QuaantumBase>
        </FocusTrap>
      </QuaantumBase>
    </>
  ) : null;
};

export default Modal;
