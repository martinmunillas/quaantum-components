import React from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawUl } from '../../HTML/HTML';

export interface UnorderedListProps extends QuaantumProps {}

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps('UnorderedList');
  return <RawUl {...internalProps} {...props} />;
};

export default UnorderedList;
