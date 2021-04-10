import React, { ImgHTMLAttributes } from 'react';
import { QuaantumUIProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawImage } from '../../HTML/HTML';

export interface ImageProps extends QuaantumUIProps, ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = (props) => {
  const internalProps = useQuaantumInternalProps('Image');

  return <RawImage {...internalProps} {...props} />;
};

export default Image;
