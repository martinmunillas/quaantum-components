import { BuitUIProps } from '../../types';
import { genCss, Config } from '../hooks/useGenCss';

export const pseudoResolver = (props: BuitUIProps, config: Config) => {
  return `{${genCss(props, config)}}`;
};
