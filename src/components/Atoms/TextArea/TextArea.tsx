import React from 'react';
import styled from 'styled-components';

export interface TextAreaProps {}

const TextAreaWithoutContext = styled.textarea``;

const TextArea: React.FC<TextAreaProps> = (props) => {
  return <TextAreaWithoutContext {...props} />;
};

export default TextArea;
