import { QuaantumProps } from '../../../css/types';

const normal: QuaantumProps = {};

const variants = {
  normal,
};

const base: QuaantumProps = {
  bgColor: 'white',
  r: '10px',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  position: 'fixed',
  minW: '50vw',
};

const defaultVariant = 'normal';

export const Modal = {
  variants,
  base,
  defaultVariant,
};
