import React, { forwardRef, ImgHTMLAttributes, PropsWithChildren } from 'react';
import { QuaantumProps } from '../../../css/types';
import { QuaantumBase } from '../../Base/QuaantumBase';

export interface ImgProps
  extends QuaantumProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'height' | 'width'> {
  src: string;
  alt: string;
}

const Img = forwardRef<HTMLImageElement, PropsWithChildren<ImgProps>>((props, ref) => {
  return <QuaantumBase as='img' styleAs='Img' {...props} ref={ref} />;
});

Img.displayName = 'Img';

export default Img;
