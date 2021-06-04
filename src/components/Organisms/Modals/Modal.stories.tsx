import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import Button from '../../Atoms/Button/Button';

export default {
  title: 'Organisms/Modals',
  component: Modal,
} as Meta;

export const Default: Story<ModalProps> = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const openRef = useRef<HTMLButtonElement>(null);
  return (
    <QuaantumProvider theme={theme}>
      <Button bgColor='black' onClick={() => setOpen(true)} ref={openRef}>
        Open Modal
      </Button>
      <Modal onClose={handleClose} isOpen={open} onCloseFocus={openRef}>
        Modal
      </Modal>
    </QuaantumProvider>
  );
};

Default.args = {};
