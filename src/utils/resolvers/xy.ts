import { QuaantumProps } from '../../types';

export const xResolver = (type: 'padding' | 'margin') => (
  value: QuaantumProps['mx'] | QuaantumProps['px']
) => {
  return `${type}-top: ${value}; ${type}-bottom: ${value}`;
};
export const yResolver = (type: 'padding' | 'margin') => (
  value: QuaantumProps['my'] | QuaantumProps['py']
) => {
  return `${type}-left: ${value}; ${type}-right: ${value}`;
};
