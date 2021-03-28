import React from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawH1, RawH2, RawH3, RawH4, RawH5, RawH6 } from '../../HTML/HTML';

export interface HeadingProps extends BuitUIProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const headings = {
  h1: RawH1,
  h2: RawH2,
  h3: RawH3,
  h4: RawH4,
  h5: RawH5,
  h6: RawH6,
};

const Heading = ({ as = 'h1', ...props }: HeadingProps) => {
  const internalProps = useBuitInternalProps('Heading');

  const H = as in headings ? headings[as] : headings.h1;

  return <H {...internalProps} {...props} />;
};

export default Heading;
