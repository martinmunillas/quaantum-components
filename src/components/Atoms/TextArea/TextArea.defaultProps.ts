import { QuaantumUIProps } from '../../../types';
import { ComponentCtx, VariantsCtx } from '../../../defaults/theme';

const base: QuaantumUIProps = {
  border: '1px solid gray',
  padding: '10px 15px',
  round: '5px',
  outline: 'none',
  resize: 'none',
  width: '300px',
  height: '150px',
  _focus: {
    boxShadow: '0px 0px 10px 1px rgb(25, 163, 227, 85%);',
  },
};
const variants: VariantsCtx = {};

export const TextArea: ComponentCtx = {
  base,
  variants,
  defaultVariant: '',
};
