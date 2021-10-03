import { useEffect, useMemo } from 'react';
import { internalProps } from '../../css/dictionary';
import { QuaantumProps } from '../../css/types';
import { filterUndefined } from '../funcs/filterUndefined';
import { useGenCss } from './useGenCss';
import { useTheme } from './useTheme';

type WithoutQuaantumPropKeys<T> = Omit<T, keyof QuaantumProps>;

/**
 * Takes the props of the component an returns cleaned ones without the QuaantumProps and with the css as "styles"
 */
export const useQuaantum = <
  T extends { styleAs?: string; variant?: string },
  E extends readonly string[] | string[]
>(
  props: T,
  exclude?: E
) => {
  const gen = useGenCss();
  const theme = useTheme();

  useEffect(() => {
    if (props.styleAs) {
      if (!(props.styleAs in theme.components)) {
        throw new Error(
          `'${props.styleAs}' component is not defined in the QuaantumUI theme, 
                  either define the component in your theme or extend the quaantum one`
        );
      }
    }
  });

  const [usableProps, excludedProps] = useMemo(() => {
    let usable: Record<string, any> = {};
    let excluded: Record<string, any> = {};
    for (const [key, value] of Object.entries(props) as [string, any][]) {
      if ((exclude || ([] as string[])).includes(key)) {
        excluded[key] = value;
      } else {
        usable[key] = value;
      }
    }
    return [usable, excluded];
  }, [props]);

  const builtHieriarchy = useMemo(
    () =>
      props.styleAs
        ? {
            ...filterUndefined(theme.components[props.styleAs]?.base || {}),
            ...filterUndefined(
              theme.components[props.styleAs]?.variants?.[
                props.variant || theme.components[props.styleAs].defaultVariant
              ] || {}
            ),
            ...filterUndefined(usableProps || {}),
          }
        : filterUndefined(usableProps || {}),
    [props, theme]
  );

  const styles = useMemo(() => gen(builtHieriarchy), [builtHieriarchy, gen]);
  type FinalProps = WithoutQuaantumPropKeys<T> & { styles: string };

  const finalProps = useMemo(() => {
    let cleaned: Record<string, any> = { ...excludedProps, styles };
    for (const [key, value] of Object.entries(usableProps) as [string, any][]) {
      if (!internalProps.includes(key)) {
        cleaned[key] = value;
      }
    }
    return cleaned;
  }, [props, styles, internalProps]);

  return finalProps as FinalProps;
};
