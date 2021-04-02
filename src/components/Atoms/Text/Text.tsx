import React, { HTMLAttributes } from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawP } from '../../HTML/HTML';

export interface TextProps extends QuaantumUIProps, HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = (props) => {
  const internalProps = useQuaantumInternalProps('Text');

  return <RawP {...internalProps} {...props} />;
};

export default Text;
