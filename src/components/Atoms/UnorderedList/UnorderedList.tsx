import React from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawUl } from '../../HTML/HTML';

export interface UnorderedListProps extends BuitUIProps {}

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  const internalProps = useBuitInternalProps('UnorderedList');
  return <RawUl {...internalProps} {...props} />;
};

export default UnorderedList;
