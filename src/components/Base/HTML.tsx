import { ComponentType } from 'react';
import styled from 'styled-components';
import { DomElement, domElements } from '../../utils/domElements';
import { styledProps } from '../../utils/styledProps';

type Quaantum = {
  [key in DomElement]: ComponentType<{ styles: string } & Record<string, any>>;
};

export const HTML = domElements.reduce(
  (prev, element: DomElement) => ({
    ...prev,
    [element]: styled(element)(...styledProps),
  }),
  {}
) as Quaantum;
