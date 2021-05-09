import React, { ImgHTMLAttributes } from 'react';
import { QuaantumProps } from '../../../types';
import { useQuaantumInternalProps } from '../../../utils/hooks/useQuaantumInternalProps';
import { RawImage } from '../../HTML/HTML';

export interface ImageProps extends QuaantumProps, ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = (props) => {
  const internalProps = useQuaantumInternalProps(props.styleAs || 'Image');

  return <RawImage {...internalProps} {...props} />;
};

export default Image;
