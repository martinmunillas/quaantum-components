import { QuaantumUIProps } from '../../types';

export const widthResolver = (value: QuaantumUIProps['width']) => {
  if (!value) {
    return '';
  }
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};
