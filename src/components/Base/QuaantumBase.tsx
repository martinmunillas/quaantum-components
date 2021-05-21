import React, { useMemo } from 'react';
import { QuaantumProps } from '../../css/types';
import { DomElement } from '../../utils/domElements';
import { useQuaantum } from '../../utils/hooks/useQuaantum';
import { HTML } from './HTML';

interface QuaantumBaseProps<T extends string> extends QuaantumProps {
  as?: T;
}

export const QuaantumBase = <T extends DomElement | string>({
  as: As,
  ...props
}: QuaantumBaseProps<T> & Record<string, any>) => {
  const finalProps = useQuaantum(props);

  let internalAs: string = useMemo(() => As || '', [As]);

  if (!internalAs) {
    internalAs = 'div';
  }

  if (!(internalAs in HTML)) {
    throw new Error(`${internalAs} is not a valid dom element, please replace it with a valid one`);
  }

  const Selected = useMemo(() => HTML[internalAs as DomElement], [internalAs]);

  return <Selected {...finalProps} />;
};
