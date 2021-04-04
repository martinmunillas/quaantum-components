import React from 'react';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawUl } from '../../HTML/HTML';

export interface UnorderedListProps {}

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps('UnorderedList');
  return <RawUl {...internalProps} {...props} />;
};

export default UnorderedList;
