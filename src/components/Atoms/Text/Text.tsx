import React, { HTMLAttributes } from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawP } from '../../HTML/HTML';

export interface TextProps extends BuitUIProps, HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = (props) => {
  const internalProps = useBuitInternalProps('Text');

  return <RawP {...internalProps} {...props} />;
};

export default Text;
