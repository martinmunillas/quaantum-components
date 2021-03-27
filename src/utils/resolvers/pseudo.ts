import { BuitUIProps } from '../../types';
import { Config, genCss } from '../genCss';

export const pseudoResolver = (props: BuitUIProps, config: Config) => {
  return `{${genCss(props, config)}}`;
};
