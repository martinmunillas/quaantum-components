import React, { AnchorHTMLAttributes, forwardRef } from 'react';
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
const Link: React.FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>((props: LinkProps) => {
  return <QuaantumBase as='a' styleAs='Link' {...props} />;
});

export default Link;
