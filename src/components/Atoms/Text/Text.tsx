import React, { HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawP } from '../../HTML/HTML';

export interface TextProps extends QuaantumProps, HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Text');

  return <RawP {...internalProps} {...props} />;
};

export default Text;
