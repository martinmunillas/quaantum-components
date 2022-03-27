import {
  forwardRef as forward,
  ComponentType,
  ComponentProps,
  ForwardRefRenderFunction,
} from 'react';
import { QuaantumProperties } from '../css/types';

type ExtendedProps<T extends { as?: QuaantumProperties['as'] }> = T['as'] extends ComponentType<any>
  ? T & ComponentProps<T['as']>
  : T;

export const forwardRef = <E extends HTMLElement, P extends { as?: QuaantumProperties['as'] }>(
  fn: ForwardRefRenderFunction<E, ExtendedProps<P>>
): ComponentType<ExtendedProps<P>> => {
  // @ts-ignore
  return forward(fn);
};
