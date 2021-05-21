import { QuaantumProps } from '../../../css/types';

const normal: QuaantumProps = {};
const underline: QuaantumProps = {
  textDecoration: 'underline',
};

const variants = {
  normal,
  underline,
};

const base: QuaantumProps = {
  color: 'primary',
};

const defaultVariant = 'normal';

export const Heading = {
  variants,
  base,
  defaultVariant,
};
