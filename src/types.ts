import { ComponentCtx } from './defaults/theme';
import { GenCss } from './utils/hooks/useGenCss';

export interface QuaantumUIPropsRequired {
  round: string | number;
  color: string;
  border: string;
  bg: string;
  bgColor: string;
  boxShadow: string;
  width: string | number;
  height: string | number;
  padding: string | number;
  margin: string | number;
  fontWeight: string | number;
  fontSize: string | number;
  minW: string | number;
  maxW: string | number;
  minH: string | number;
  maxH: string | number;
  cursor: string;
  outline: string;
  _focus: Omit<QuaantumUIProps, '_focus'>;
  _hover: Omit<QuaantumUIProps, '_hover'>;
  _active: Omit<QuaantumUIProps, '_active'>;
}

export type QuaantumUIProps = Partial<QuaantumUIPropsRequired>;

export interface Internal {
  componentCtx: ComponentCtx;
  genCss: GenCss;
}
