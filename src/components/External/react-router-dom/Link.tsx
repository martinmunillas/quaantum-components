import { Link as ReactRouterDomLink, LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';
import React, { forwardRef, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { QuaantumProps } from '../../../css/types';
import { useQuaantum } from '../../../utils/hooks/useQuaantum';
import { styledProps } from '../../../utils/styledProps';

const StyledLink = styled(ReactRouterDomLink)(...styledProps);

export interface LinkProps extends QuaantumProps, Omit<ReactRouterDomLinkProps, 'color'> {}

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>((props, ref) => {
  const finalProps = useQuaantum({ styleAs: 'Link', ...props });
  return <StyledLink {...finalProps} ref={ref} />;
});

Link.displayName = 'Link';
