import React, { useContext } from 'react';
import styled from 'styled-components';
import { BuitUIProps, Internal } from '../../../types';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { ctx } from '../../Providers/BuitProvider/BuitProvider';

export interface HeadingProps extends BuitUIProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const defaultHeadingProps = {
  color: 'primary',
};

const H1 = styled.h1<Omit<HeadingProps, 'as'> & Internal>`
  ${(props) => props.genCss({ ...defaultHeadingProps, ...props })}
`;
const H2 = styled.h2<Omit<HeadingProps, 'as'> & Internal>`
  ${(props) => props.genCss({ ...defaultHeadingProps, ...props })}
`;
const H3 = styled.h3<Omit<HeadingProps, 'as'> & Internal>`
  ${(props) => props.genCss({ ...defaultHeadingProps, ...props })}
`;
const H4 = styled.h4<Omit<HeadingProps, 'as'> & Internal>`
  ${(props) => props.genCss({ ...defaultHeadingProps, ...props })}
`;
const H5 = styled.h5<Omit<HeadingProps, 'as'> & Internal>`
  ${(props) => props.genCss({ ...defaultHeadingProps, ...props })}
`;
const H6 = styled.h6<Omit<HeadingProps, 'as'> & Internal>`
  ${(props) => props.genCss({ ...defaultHeadingProps, ...props })}
`;

const Heading = ({ as = 'h1', ...props }: HeadingProps) => {
  const { components } = useContext(ctx);
  const genCss = useGenCss();
  switch (as) {
    case 'h1':
      return <H1 genCss={genCss} componentCtx={components.heading} {...props} />;
    case 'h2':
      return <H2 genCss={genCss} componentCtx={components.heading} {...props} />;
    case 'h3':
      return <H3 genCss={genCss} componentCtx={components.heading} {...props} />;
    case 'h4':
      return <H4 genCss={genCss} componentCtx={components.heading} {...props} />;
    case 'h5':
      return <H5 genCss={genCss} componentCtx={components.heading} {...props} />;
    case 'h6':
      return <H6 genCss={genCss} componentCtx={components.heading} {...props} />;
  }
};

export default Heading;
