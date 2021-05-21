import React, { ImgHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ImageProps
  extends QuaantumProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'height' | 'width'> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = (props) => {
  return <QuaantumBase as='img' styleAs='Image' {...props} />;
};

export default Image;
