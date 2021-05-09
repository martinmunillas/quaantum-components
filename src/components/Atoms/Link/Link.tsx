import React, { AnchorHTMLAttributes } from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawAnchor, RawLink } from '../../HTML/HTML';
import { QuaantumProps } from '../../../types';

export interface LinkProps extends QuaantumProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  href: string;
}

/**
 * if you provide an "external" prop it will behave as an anchor, else as a react-router-dom's Link
 */
const Link: React.FC<LinkProps> = ({ href, external, ...props }: LinkProps) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Link');

  return external ? (
    <RawAnchor {...internalProps} {...props} href={href} />
  ) : (
    <RawLink {...internalProps} {...props} to={href} />
  );
};

export default Link;
