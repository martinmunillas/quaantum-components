import { colors } from './defaults';

type ColorType = keyof typeof colors;

export interface QuaantumUIProps {
  round?: string | number;
  color?: ColorType;
  bg?: string;
  bgColor?: string;
  width?: string | number;
  hieght?: string | number;
  _focus?: Omit<QuaantumUIProps, '_focus'>;
  _hover?: Omit<QuaantumUIProps, '_hover'>;
  _active?: Omit<QuaantumUIProps, '_active'>;
}
