import React, { AnchorHTMLAttributes } from 'react';
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
const Link: React.FC<LinkProps> = ({ as: As, href, ...props }: LinkProps) => {
  return <QuaantumBase as={As || 'a'} styleAs='Link' href={href} {...props} />;
};

export default Link;
