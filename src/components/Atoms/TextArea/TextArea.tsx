import React, { TextareaHTMLAttributes } from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawTextarea } from '../../HTML/HTML';

export interface TextAreaProps extends BuitUIProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const internalProps = useBuitInternalProps('TextArea');

  return <RawTextarea {...internalProps} {...props} />;
};

export default TextArea;
