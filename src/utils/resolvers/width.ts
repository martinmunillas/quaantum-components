import { defaultMeasurament } from '../../defaults';
import { BuitUIProps } from '../../types';

export const widthResolver = (value: BuitUIProps['width']) => {
  if (!value) {
    return '';
  }
  if (typeof value === 'number') {
    return `${value}${defaultMeasurament.width}`;
  }
  return value;
};
