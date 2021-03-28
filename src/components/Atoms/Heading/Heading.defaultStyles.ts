import { QuaantumUIProps } from '../../../types';

const normal: QuaantumUIProps = {};
const underline: QuaantumUIProps = {
  textDecoration: 'underline',
};

const variants = {
  normal,
  underline,
};

const base: QuaantumUIProps = {
  color: 'primary',
};

const defaultVariant = 'normal';

export const Heading = {
  variants,
  base,
  defaultVariant,
};
