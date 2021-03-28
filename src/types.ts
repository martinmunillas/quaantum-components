import { ComponentCtx } from './defaults/theme';
import { GenCss } from './utils/hooks/useGenCss';

export interface BuitUIPropsRequired {
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
  display: string;
  justifyContent: string;
  alignItems: string;
  outline: string;
  _focus: Omit<BuitUIProps, '_focus'>;
  _hover: Omit<BuitUIProps, '_hover'>;
  _active: Omit<BuitUIProps, '_active'>;
  variant: string;
}

export type BuitUIProps = Partial<BuitUIPropsRequired>;

export interface Internal {
  componentCtx: ComponentCtx;
  genCss: GenCss;
}
