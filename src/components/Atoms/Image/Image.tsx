import React, { forwardRef, ImgHTMLAttributes, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ImageProps
  extends QuaantumProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'height' | 'width'> {
  src: string;
  alt: string;
}

const Image = forwardRef<HTMLImageElement, PropsWithChildren<ImageProps>>((props, ref) => {
  return <QuaantumBase as='img' styleAs='Image' {...props} ref={ref} />;
});

export default Image;
