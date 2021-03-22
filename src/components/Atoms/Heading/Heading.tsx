import React from 'react';
import styled from 'styled-components';
import { QuaantumUIProps } from '../../../types';
import { genCss } from '../../../utils/genCss';

export interface HeadingProps extends QuaantumUIProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const H1 = styled.h1<Omit<HeadingProps, 'as'>>`
  ${(props) => genCss(props)}
`;
const H2 = styled.h2<Omit<HeadingProps, 'as'>>`
  ${(props) => genCss(props)}
`;
const H3 = styled.h3<Omit<HeadingProps, 'as'>>`
  ${(props) => genCss(props)}
`;
const H4 = styled.h4<Omit<HeadingProps, 'as'>>`
  ${(props) => genCss(props)}
`;
const H5 = styled.h5<Omit<HeadingProps, 'as'>>`
  ${(props) => genCss(props)}
`;
const H6 = styled.h6<Omit<HeadingProps, 'as'>>`
  ${(props) => genCss(props)}
`;

const Heading = ({ as = 'h1', ...props }: HeadingProps) => {
  switch (as) {
    case 'h1':
      return <H1 {...props} />;
    case 'h2':
      return <H2 {...props} />;
    case 'h3':
      return <H3 {...props} />;
    case 'h4':
      return <H4 {...props} />;
    case 'h5':
      return <H5 {...props} />;
    case 'h6':
      return <H6 {...props} />;
  }
};

export default Heading;
