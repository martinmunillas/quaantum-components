import { QuaantumUIProps } from '../../types';
import { genCss, Config } from '../hooks/useGenCss';

export const pseudoResolver = (props: QuaantumUIProps, config: Config) => {
  return `{${genCss(props, config)}}`;
};
