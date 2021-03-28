import React, { useContext } from 'react';
import styled from 'styled-components';
import { BuitUIProps, Internal } from '../../../types';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { ctx } from '../../Providers/BuitProvider/BuitProvider';

export interface BoxProps extends BuitUIProps {
  as?: 'div' | 'main' | 'article' | 'section';
}

type AsProps = Omit<BoxProps, 'as'> & Internal;

const gen = (props: AsProps) => props.genCss({ ...props.componentCtx.base, ...props });

const arr = ([] as unknown) as TemplateStringsArray;

const As = {
  div: styled.div<AsProps>(arr, gen),
  main: styled.main<AsProps>(arr, gen),
  article: styled.article<AsProps>(arr, gen),
  section: styled.section<AsProps>(arr, gen),
};

const Box: React.FC<BoxProps> = ({ as = 'div', ...props }) => {
  const { components } = useContext(ctx);
  const genCss = useGenCss();

  const Component = As[as in As ? as : 'div'];
  return <Component genCss={genCss} {...props} componentCtx={components?.box || { base: {} }} />;
};

export default Box;
