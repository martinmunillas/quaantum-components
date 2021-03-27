import { QuaantumUIProps } from '../types';
import { button } from './components/button';

export interface ColorsCtx {
  [color: string]: string | ColorsCtx;
}

interface Variants {
  [variant: string]: QuaantumUIProps;
}

export interface ComponentCtx {
  base?: QuaantumUIProps;
  variants?: Variants;
  defaultVariant: string;
}

interface Components {
  [component: string]: ComponentCtx;
}

export interface Theme {
  colors: ColorsCtx;
  font?: string;
  components: Components;
  global?: QuaantumUIProps;
}

export const theme: Theme = {
  colors: {
    black: '#121212',
    white: '#eeeeee',
    primary: '#345674',
    secondary: '#787123',
    tertiary: '#555978',
  },
  components: {
    button,
  },
};
