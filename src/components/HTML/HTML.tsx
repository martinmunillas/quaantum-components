import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { InternalProps, QuaantumProps } from '../../types';
import { internalProps } from '../../dictionary';
import { useGenCss } from '../../utils/hooks/useGenCss';
import { useTheme } from '../../utils/hooks/useTheme';
import { domElements } from '../../utils/domElements';

export type HTMLProps = InternalProps<QuaantumProps>;

interface RawProps {
  styles: string;
}

const props = [([] as unknown) as TemplateStringsArray, (props: RawProps) => props.styles] as const;

/**
 *  takes a styled-component and returns another component with styles
 */
const hoc = <T extends RawProps>(
  Component: ComponentType<T>
): React.FC<HTMLProps & Omit<T, 'styles'>> => (props) => {
  const gen = useGenCss();
  const theme = useTheme();

  const builtHieriarchy = props.componentName
    ? {
        ...theme.components[props.componentName]?.base,
        ...theme.components[props.componentName]?.variants?.[
          props.variant || theme.components[props.componentName].defaultVariant
        ],
        ...props,
      }
    : props;

  const styles = gen(builtHieriarchy);
  const finalProps: Record<string, any> = { styles };

  for (const prop of Object.entries(props) as [string, any][]) {
    if (!internalProps.includes(prop[0])) {
      finalProps[prop[0]] = prop[1];
    }
  }

  return <Component {...(finalProps as T)} />;
};

/**
 * Any valid HTML element
 */
export type DomElement = typeof domElements[number];

type Quaantum = {
  [key in DomElement]: ComponentType<QuaantumProps>;
};

const Quaantum = domElements.reduce(
  (prev, element: DomElement) => ({
    // return hoc(styled[element]<RawProps>(...props));
    ...prev,
    [element]: hoc(styled(element)(...props)),
  }),
  {}
) as Quaantum;

export const QuaantumBase = <T extends { as?: DomElement }>({ as = 'div', ...props }: T) => {
  const Selected = Quaantum[as];
  return <Selected {...props} />;
};

export { Quaantum };
