import { BuitUIProps } from '../../../types';

const normal: BuitUIProps = {};
const underline: BuitUIProps = {
  textDecoration: 'underline',
};

const variants = {
  normal,
  underline,
};

const base: BuitUIProps = {
  color: 'primary',
};

const defaultVariant = 'normal';

export const Heading = {
  variants,
  base,
  defaultVariant,
};
