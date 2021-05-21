import { Link, LinkProps } from 'react-router-dom';
import React from 'react';
import { styledProps } from '../../utils/styledProps';
import styled from 'styled-components';
import { useQuaantum } from '../../utils/hooks/useQuaantum';
import { QuaantumProps } from '../../css/types';

const StyledLink = styled(Link)(...styledProps);

interface ReactRouterLinkProps extends QuaantumProps, Omit<LinkProps, 'color'> {}

const ReactRouterLink: React.FC<ReactRouterLinkProps> = (props) => {
  const finalProps = useQuaantum(props);
  return <StyledLink {...finalProps} />;
};

export default ReactRouterLink;
