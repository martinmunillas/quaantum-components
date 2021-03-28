import { BuitUIProps } from '../../types';

export const widthResolver = (value: BuitUIProps['width']) => {
  if (!value) {
    return '';
  }
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};
