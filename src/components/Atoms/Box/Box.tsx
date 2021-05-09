import React, { HTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import {
  RawFooter,
  RawDiv,
  RawMain,
  RawArticle,
  RawSection,
  RawAside,
  RawForm,
  RawNav,
  RawHeader,
} from '../../HTML/HTML';

const elements = {
  div: RawDiv,
  main: RawMain,
  article: RawArticle,
  section: RawSection,
  aside: RawAside,
  form: RawForm,
  nav: RawNav,
  header: RawHeader,
  footer: RawFooter,
};

export interface BoxProps extends QuaantumProps, HTMLAttributes<Element> {
  as?: keyof typeof elements;
}

const Box: React.FC<BoxProps> = ({ as = 'div', ...props }) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Box');
  const Component = (as in elements ? elements[as] : elements.div) as typeof elements[Exclude<
    keyof typeof elements,
    'form'
  >];

  return <Component {...internalProps} {...props} />;
};

export default Box;
