import React, { ImgHTMLAttributes } from 'react';
import { BuitUIProps } from '../../../types';
import { useBuitInternalProps } from '../../../utils/hooks/useBuitInternalProps';
import { RawImage } from '../../HTML/HTML';

export interface ImageProps extends BuitUIProps, ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = (props) => {
  const internalProps = useBuitInternalProps('Image');

  return <RawImage {...internalProps} {...props} />;
};

export default Image;
