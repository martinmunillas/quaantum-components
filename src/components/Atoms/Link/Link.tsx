import React, { AnchorHTMLAttributes } from 'react';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawAnchor, RawLink } from '../../HTML/HTML';
import { BuitUIProps } from '../../../types';

export interface LinkProps extends BuitUIProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  href: string;
}

/**
 * if you provide an "external" prop it will behave as an anchor, else as a react-router-dom's Link
 */
const Link: React.FC<LinkProps> = ({ href, external, ...props }: LinkProps) => {
  const internalProps = useBuitInternalProps('Link');

  return external ? (
    <RawAnchor {...internalProps} {...props} href={href} />
  ) : (
    <RawLink {...internalProps} {...props} to={href} />
  );
};

export default Link;
