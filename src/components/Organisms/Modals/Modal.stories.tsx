import React, { FormEventHandler, useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import QuaantumProvider from '../../Providers/QuaantumProvider/QuaantumProvider';
import { theme } from '../../../defaults/theme';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';

export default {
  title: 'Organisms/Modals',
  component: Modal,
} as Meta;

export const Default: Story<ModalProps> = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  const openRef = useRef<HTMLButtonElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (target: 'email' | 'password', value: string) => {
    if (target === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <QuaantumProvider theme={theme}>
      {/* high so we can test scroll behavior  */}
      <Button bgColor='black' onClick={() => setOpen(true)} ref={openRef} h='3000px'>
        Open Modal
      </Button>
      <Modal
        onClose={handleClose}
        isOpen={open}
        onCloseFocus={openRef}
        d='flex'
        flexDirection='column'
        alignItems='center'
        as='form'
        maxW='700px'
      >
        <Modal.Overlay />
        <Modal.Header>Sign Up!</Modal.Header>
        <Modal.CloseButton>X</Modal.CloseButton>
        <Modal.Body>
          <Input
            placeholder='email'
            d='block'
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <Input
            placeholder='password'
            type='password'
            d='block'
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </QuaantumProvider>
  );
};

Default.args = {};
