import React, { AnchorHTMLAttributes } from 'react';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawAnchor } from '../../HTML/HTML';
import { BuitUIProps } from '../../../types';

export interface LinkProps extends BuitUIProps, AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const internalProps = useBuitInternalProps('Link');

  return <RawAnchor {...internalProps} {...props} />;
};

export default Link;
