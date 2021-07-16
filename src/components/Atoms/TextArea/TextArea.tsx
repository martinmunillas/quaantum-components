import React, { forwardRef, PropsWithChildren, TextareaHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface TextAreaProps
  extends QuaantumProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'> {}

const TextArea = forwardRef<HTMLTextAreaElement, PropsWithChildren<TextAreaProps>>((props) => {
  return <QuaantumBase as='textarea' styleAs='TextArea' {...props} />;
});

export default TextArea;
