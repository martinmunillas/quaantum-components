import React, { AnchorHTMLAttributes } from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawAnchor } from '../../HTML/HTML';
import { QuaantumUIProps } from '../../../types';

export interface LinkProps extends QuaantumUIProps, AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const internalProps = useQuaantumInternalProps('Link');

  return <RawAnchor {...internalProps} {...props} />;
};

export default Link;
