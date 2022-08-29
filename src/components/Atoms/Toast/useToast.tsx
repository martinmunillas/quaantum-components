import React, { ReactNode } from 'react';
import { ReactElement, useState } from 'react';
import { QuaantumProps } from '../../../css/types';
import Toast from './Toast';

export type ToastPlacement =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'center';

export interface ToastConfig {
  /**
   * Time of duration of the toast in ms
   */
  duration?: number;
  /**
   * Placement of the toast
   */
  placement: ToastPlacement;
  props?: QuaantumProps;
}

const defaultConfig: ToastConfig = {
  placement: 'top-right',
};

const styles = (placement: ToastPlacement): QuaantumProps => {
  switch (placement) {
    case 'top-left':
      return {
        top: 0,
        left: 0,
      };
    case 'top-right':
      return {
        top: 0,
        right: 0,
      };
    case 'bottom-left':
      return {
        bottom: 0,
        left: 0,
      };
    case 'bottom-right':
      return {
        bottom: 0,
        right: 0,
      };
    case 'top-center':
      return {
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case 'bottom-center':
      return {
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      };
    case 'center':
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    default:
      console.error('Invalid placement');
      return {
        bottom: 0,
        right: 0,
      };
  }
};

export const useToast = (initConfig?: Partial<ToastConfig>) => {
  const [toast, setToast] = useState<ReactElement | null>(null);

  const handleToast = (children: ReactNode, customConfig?: Partial<ToastConfig>) => {
    const config = { ...defaultConfig, ...initConfig, ...customConfig };
    const css = styles(config.placement);
    setToast(
      <Toast {...css} {...config.props}>
        {children}
      </Toast>
    );
    if (typeof config.duration === 'number') {
      setTimeout(() => setToast(null), config.duration);
    }
  };

  const close = () => setToast(null);

  return { toast, setToast: handleToast, close };
};
