import React, { useContext } from 'react';
import styled from 'styled-components';
import { QuaantumUIProps, Internal } from '../../../types';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { ctx } from '../../Providers/QuaantumProvider/QuaantumProvider';

export interface FlexProps extends QuaantumUIProps {
  as?: 'div' | 'main' | 'article' | 'section';
}

const FlexDiv = styled.div<Omit<FlexProps, 'as'> & Internal>`
  ${(props) => props.genCss(props)}
`;
const FlexMain = styled.main<Omit<FlexProps, 'as'> & Internal>`
  ${(props) => props.genCss(props)}
`;
const FlexArticle = styled.article<Omit<FlexProps, 'as'> & Internal>`
  ${(props) => props.genCss(props)}
`;
const FlexSection = styled.section<Omit<FlexProps, 'as'> & Internal>`
  ${(props) => props.genCss(props)}
`;

const Flex: React.FC<FlexProps> = ({ as = 'div', ...props }) => {
  const { components } = useContext(ctx);
  const genCss = useGenCss();
  switch (as) {
    case 'main':
      return <FlexMain genCss={genCss} {...props} componentCtx={components?.flex} />;
    case 'article':
      return <FlexArticle genCss={genCss} {...props} componentCtx={components?.flex} />;
    case 'section':
      return <FlexSection genCss={genCss} {...props} componentCtx={components?.flex} />;
    case 'div':
    default:
      return <FlexDiv genCss={genCss} {...props} componentCtx={components?.flex} />;
  }
};

export default Flex;
