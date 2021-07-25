import React, { AnchorHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface LinkProps
  extends QuaantumProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  href: string;
}

/**
 * if you provide an "external" prop it will behave as an anchor, else as a react-router-dom's Link
 */
const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>((props, ref) => {
  return <QuaantumBase as='a' styleAs='Link' {...props} ref={ref} />;
});

Link.displayName = 'Link';

export default Link;
