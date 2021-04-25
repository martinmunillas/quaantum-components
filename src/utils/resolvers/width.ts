import { QuaantumProps } from '../../types';

export const widthResolver = (value: QuaantumProps['width']) => {
  if (!value) {
    return '';
  }
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};
