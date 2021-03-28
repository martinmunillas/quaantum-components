import React from 'react';
import styled from 'styled-components';

export interface TextProps {}

const TextWithoutContext = styled.p``;

const Text: React.FC<TextProps> = (props) => {
  return <TextWithoutContext {...props} />;
};

export default Text;
