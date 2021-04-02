import React, { HTMLAttributes } from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawDiv, RawMain, RawArticle, RawSection, RawAside, RawForm } from '../../HTML/HTML';

const elements = {
  div: RawDiv,
  main: RawMain,
  article: RawArticle,
  section: RawSection,
  aside: RawAside,
  form: RawForm,
};

export interface BoxProps extends QuaantumUIProps, HTMLAttributes<Element> {
  as?: 'div' | 'main' | 'article' | 'section' | 'aside' | 'form';
}

const Box: React.FC<BoxProps> = ({ as = 'div', ...props }) => {
  const internalProps = useQuaantumInternalProps('Box');

  const Component = (as in elements ? elements[as] : elements.div) as typeof elements[Exclude<
    keyof typeof elements,
    'form'
  >];

  return <Component {...internalProps} {...props} />;
};

export default Box;
