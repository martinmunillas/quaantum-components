import React from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawUl } from '../../HTML/HTML';

export interface UnorderedListProps extends QuaantumUIProps {}

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps('UnorderedList');
  return <RawUl {...internalProps} {...props} />;
};

export default UnorderedList;
