import { QuaantumProps } from '../../../css/types';

const solid: QuaantumProps = {
  color: 'white',
  bgColor: 'primary',
};
const ghost: QuaantumProps = {
  bgColor: 'transparent',
  color: 'primary',
};

const unstyled: QuaantumProps = {
  bgColor: 'unset',
  border: 'unset',
  m: 0,
  p: 0,
  fontWeight: 'unset',
  fontSize: 'unset',
};

const outline: QuaantumProps = {
  ...ghost,
  border: '1px solid currentColor',
};

const variants = {
  solid,
  ghost,
  outline,
  unstyled,
};

const base: QuaantumProps = {
  b: 'none',
  r: '12px',
  p: '10px 20px',
  fontWeight: 600,
  fontSize: 1.1,
  cursor: 'pointer',
  outline: 'none',
};

const defaultVariant = 'solid';

export const Button = {
  variants,
  base,
  defaultVariant,
};
