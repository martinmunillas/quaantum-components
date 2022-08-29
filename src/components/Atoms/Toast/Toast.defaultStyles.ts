import { QuaantumProps } from '../../../css/types';
import { ComponentCtx, VariantsCtx } from '../../../defaults/theme';

const variants: VariantsCtx = {};

const base: QuaantumProps = {
  position: 'absolute',
  bgColor: 'primary.main',
  margin: '24px',
  color: 'white.main',
  padding: '12px',
  r: '4px',
};

export const Toast: ComponentCtx = {
  variants,
  base,
};
