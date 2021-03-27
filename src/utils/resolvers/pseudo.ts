import { QuaantumUIProps } from '../../types';
import { Config, genCss } from '../genCss';

export const pseudoResolver = (props: QuaantumUIProps, config: Config) => {
  return `{${genCss(props, config)}}`;
};
