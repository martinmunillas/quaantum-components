import { QuaantumProps } from '../../../css/types';

const solidVariant: QuaantumProps = {
  color: 'white',
  bgColor: 'primary',
};
const ghostVariant: QuaantumProps = {
  bgColor: 'transparent',
  color: 'primary',
};

const outlineVariant: QuaantumProps = {
  ...ghostVariant,
  border: '1px solid currentColor',
};

const variants = {
  solid: solidVariant,
  ghost: ghostVariant,
  outline: outlineVariant,
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
