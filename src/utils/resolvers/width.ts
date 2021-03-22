import { defaultMeasurament } from '../../defaults';
import { QuaantumUIProps } from '../../types';

export const widthResolver = (value: QuaantumUIProps['width']) => {
  if (!value) {
    return '';
  }
  if (typeof value === 'number') {
    return `${value}${defaultMeasurament.width}`;
  }
  return value;
};
