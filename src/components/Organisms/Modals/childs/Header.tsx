import React from 'react';
import { QuaantumProps } from '../../../../css/types';
import { QuaantumBase } from '../../../Base/QuaantumBase';

interface HeaderProps extends QuaantumProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return <QuaantumBase as='header' fontSize='1.7em' {...props} />;
};

export default Header;
