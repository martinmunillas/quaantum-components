import React, { TextareaHTMLAttributes } from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawTextarea } from '../../HTML/HTML';

export interface TextAreaProps extends QuaantumUIProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const internalProps = useQuaantumInternalProps('TextArea');

  return <RawTextarea {...internalProps} {...props} />;
};

export default TextArea;
