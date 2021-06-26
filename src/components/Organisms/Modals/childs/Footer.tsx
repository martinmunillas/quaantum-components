import React from 'react';
import { QuaantumProps } from '../../../../css/types';
import { QuaantumBase } from '../../../Base/QuaantumBase';

interface FooterProps extends QuaantumProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return <QuaantumBase as='footer' {...props} />;
};

export default Footer;
