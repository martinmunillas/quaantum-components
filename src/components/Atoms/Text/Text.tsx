import React, { HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface TextProps extends QuaantumProps, HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Text');

  return <QuaantumBase as='p' {...internalProps} {...props} />;
};

export default Text;
