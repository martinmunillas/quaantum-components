import { BuitUIProps } from '../../../types';
import { ComponentCtx, VariantsCtx } from '../../../defaults/theme';

const base: BuitUIProps = {
  border: '1px solid gray',
  padding: '10px 20px',
  round: '50px',
  outline: 'none',
  _focus: {
    boxShadow: '0px 0px 10px 1px rgb(25, 163, 227, 85%);',
  },
};
const variants: VariantsCtx = {};

export const Input: ComponentCtx = {
  base,
  variants,
  defaultVariant: '',
};
