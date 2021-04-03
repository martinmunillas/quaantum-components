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
  fontWeight: number;
  fontSize: string | number;
  minW: string | number;
  maxW: string | number;
  minH: string | number;
  maxH: string | number;
  cursor: string;
  display: 'flex' | 'grid' | 'inline-flex' | 'inline-grid' | 'block' | 'inline' | 'none';
  justifyContent: string;
  alignItems: string;
  flexDirection: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  outline: string;
  resize: 'none' | 'both' | 'horizontal' | 'vertical' | 'inherit' | 'initial' | 'unset;';
  overflow: string;
  overflowX: string;
  overflowY: string;
  fontFamily: string;
  textDecoration: string;
  position: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  objectFit: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down';
  objectPosition: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down';
  flexWrap: 'wrap' | 'no-wrap' | 'wrap-reverse';
  _focus: Omit<QuaantumUIProps, '_focus'>;
  _hover: Omit<QuaantumUIProps, '_hover'>;
  _active: Omit<QuaantumUIProps, '_active'>;
  _placeholder: Omit<QuaantumUIProps, '_placeholder'>;
  _after: Omit<QuaantumUIProps, '_after'>;
  _before: Omit<QuaantumUIProps, '_before'>;
  variant: string;
}

export type QuaantumUIProps = Partial<QuaantumUIPropsRequired>;

export interface Internal {
  componentCtx: ComponentCtx;
  genCss: GenCss;
}

export type InternalProps<T extends QuaantumUIProps> = T & Internal;
