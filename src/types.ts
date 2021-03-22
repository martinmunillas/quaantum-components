import { colors } from './defaults';

type ColorType = keyof typeof colors;

export interface BuitUIProps {
  round?: string | number;
  color?: ColorType;
  bg?: string;
  bgColor?: string;
  width?: string | number;
  height?: string | number;
  _focus?: Omit<BuitUIProps, '_focus'>;
  _hover?: Omit<BuitUIProps, '_hover'>;
  _active?: Omit<BuitUIProps, '_active'>;
}

import {} from '.';
