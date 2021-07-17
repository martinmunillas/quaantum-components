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
  minW: 'unset',
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
  border: 'none',
  round: '50px',
  padding: '10px 20px',
  fontWeight: 600,
  minW: '100px',
  fontSize: '18px',
  cursor: 'pointer',
  outline: 'none',
};

const defaultVariant = 'solid';

export const Button = {
  variants,
  base,
  defaultVariant,
};
