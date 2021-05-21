import React, { AnchorHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';
import ReactRouterLink from '../../External/ReactRouterLink';

export interface LinkProps
  extends QuaantumProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  href: string;
  as?: 'reactRouterLink' | QuaantumProps['as'];
}

/**
 * if you provide an "external" prop it will behave as an anchor, else as a react-router-dom's Link
 */
const Link: React.FC<LinkProps> = ({ as: As, href, ...props }: LinkProps) => {
  return As === 'reactRouterLink' ? (
    <ReactRouterLink to={href} styleAs='Link' {...props} />
  ) : (
    <QuaantumBase as={As || 'a'} styleAs='Link' href={href} {...props} />
  );
};

export default Link;
