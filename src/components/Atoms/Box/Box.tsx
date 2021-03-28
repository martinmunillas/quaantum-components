import React from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawDiv, RawMain, RawArticle, RawSection, RawAside } from '../../HTML/HTML';

export interface BoxProps extends QuaantumUIProps {
  as?: 'div' | 'main' | 'article' | 'section' | 'aside';
}

const elements = {
  div: RawDiv,
  main: RawMain,
  article: RawArticle,
  section: RawSection,
  aside: RawAside,
};

const Box: React.FC<BoxProps> = ({ as = 'div', ...props }) => {
  const internalProps = useQuaantumInternalProps('Box');

  const Component = as in elements ? elements[as] : elements.div;

  return <Component {...internalProps} {...props} />;
};

export default Box;
