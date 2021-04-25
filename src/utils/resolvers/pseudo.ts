import { QuaantumProps } from '../../types';
import { genCss, Config } from '../hooks/useGenCss';

export const pseudoResolver = (props: QuaantumProps, config: Config) => {
  return `{${genCss(props, config)}}`;
};
