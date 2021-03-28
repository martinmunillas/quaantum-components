import { BuitUIProps } from '../types';
import { button } from './components/button';
import { flex } from './components/flex';
import { input } from './components/input';

export interface ColorsCtx {
  [color: string]: string | ColorsCtx;
}

export interface VariantsCtx {
  [variant: string]: BuitUIProps;
}

export interface ComponentCtx {
  base: BuitUIProps;
  variants: VariantsCtx;
  defaultVariant: string;
}

interface Components {
  [component: string]: ComponentCtx;
}

export interface Theme {
  colors: ColorsCtx;
  font?: string;
  components: Components;
  global?: BuitUIProps;
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
    flex,
    input,
  },
};
