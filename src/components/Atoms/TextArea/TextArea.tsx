import React, { TextareaHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface TextAreaProps extends QuaantumProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'TextArea');

  return <QuaantumBase as='textarea' {...internalProps} {...props} />;
};

export default TextArea;
