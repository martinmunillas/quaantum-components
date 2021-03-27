import { colors } from './defaults';

type ColorType = keyof typeof colors;

export interface BuitUIPropsRequired {
  round: string | number;
  color: ColorType | string;
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
  _focus: Omit<BuitUIProps, '_focus'>;
  _hover: Omit<BuitUIProps, '_hover'>;
  _active: Omit<BuitUIProps, '_active'>;
}

export type BuitUIProps = Partial<BuitUIPropsRequired>;

import {} from '.';
