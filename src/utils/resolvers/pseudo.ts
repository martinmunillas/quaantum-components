import { BuitUIProps } from '../../types';
import { genCss } from '../genCss';

export const pseudoResolver = (props: BuitUIProps) => {
  return `{${genCss(props)}}`;
};
