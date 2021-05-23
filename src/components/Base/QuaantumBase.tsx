import React, { useMemo } from 'react';
import { QuaantumProps } from '../../css/types';
import { DomElement } from '../../utils/domElements';
import { useQuaantum } from '../../utils/hooks/useQuaantum';
import { HTML } from './HTML';

interface QuaantumBaseProps extends QuaantumProps {}

export const QuaantumBase = ({ as: As, ...props }: QuaantumBaseProps & Record<string, any>) => {
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
