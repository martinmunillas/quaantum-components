import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { QuaantumProps } from '../../css/types';
import { useQuaantum } from '../../utils/hooks/useQuaantum';
import { styledProps } from '../../utils/styledProps';

interface QuaantumBaseProps extends QuaantumProps {
  exclude?: readonly string[] | string[];
  [key: string]: any;
}

const Div = styled.div(...styledProps);

const QuaantumBase = forwardRef<HTMLElement, QuaantumBaseProps>(
  ({ as: asProp, exclude, ...props }, ref) => {
    const finalProps = useQuaantum(props, exclude);

    return <Div as={asProp} ref={ref} {...finalProps} />;
  }
);

QuaantumBase.displayName = 'QuaantumBase';

export { QuaantumBase };
