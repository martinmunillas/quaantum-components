import React from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { QuaantumBase } from '../../HTML/HTML';

export interface UnorderedListProps extends QuaantumProps {}

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'UnorderedList');

  return <QuaantumBase as='ul' {...internalProps} {...props} />;
};

export default UnorderedList;
