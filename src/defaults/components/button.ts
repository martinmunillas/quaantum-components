import { QuaantumUIProps } from '../../types';

const solidVariant: QuaantumUIProps = {
  color: 'white',
  bgColor: 'primary',
};
const ghostVariant: QuaantumUIProps = {
  bgColor: 'transparent',
  color: 'primary',
};

const outlineVariant: QuaantumUIProps = {
  ...ghostVariant,
  border: '1px solid currentColor',
};

const variants = {
  solid: solidVariant,
  ghost: ghostVariant,
  outline: outlineVariant,
};

const base: QuaantumUIProps = {
  border: 'none',
  round: '50px',
  padding: '10px 20px',
  fontWeight: 600,
  minW: '100px',
  fontSize: '18px',
  cursor: 'pointer',
  _focus: {
    boxShadow: '0px 0px 10px 1px rgb(25, 163, 227, 85%);',
  },
  outline: 'none',
};

const defaultVariant = 'solid';

export const button = {
  variants,
  base,
  defaultVariant,
};
