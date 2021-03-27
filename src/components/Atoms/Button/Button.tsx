import styled from 'styled-components';
import { QuaantumUIProps } from '../../../types';
import { genCss } from '../../../utils/genCss';

export interface ButtonProps extends QuaantumUIProps {
  variant?: 'solid' | 'outline';
}

const solidVariant: QuaantumUIProps = {
  color: 'white',
  bgColor: 'primary',
};
const ghostVariant: QuaantumUIProps = {
  bgColor: 'transparent',
  color: 'primary',
};

const outlineVariant: QuaantumUIProps = {
  ...ghostVariant,
  border: '1px solid currentColor',
};

const variants = {
  solid: solidVariant,
  ghost: ghostVariant,
  outline: outlineVariant,
};

const base: QuaantumUIProps = {
  border: 'none',
  round: '50px',
  padding: '10px 20px',
  fontWeight: 600,
  minW: '100px',
  fontSize: '18px',
  cursor: 'pointer',
  _focus: {
    boxShadow: '1px 1px 1px 1px blue',
  },
  outline: 'none',
};

const defaultProps = {
  variant: 'solid',
};

const button = {
  variants,
  base,
  default: defaultProps,
};

const Button = styled.button<ButtonProps>`
  ${(props) =>
    genCss({ ...button.base, ...button.variants[props.variant || button.default.variant] })}
`;

export default Button;
