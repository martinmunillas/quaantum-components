import { QuaantumUIProps } from '../../types';
import { genCss } from '../genCss';

export const pseudoResolver = (props: QuaantumUIProps) => {
  return `{${genCss(props)}}`;
};
