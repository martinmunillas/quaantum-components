import styled from 'styled-components';
import { BuitUIProps } from '../../../types';
import { genCss } from '../../../utils/genCss';

export interface ButtonProps extends BuitUIProps {
  variant?: 'solid' | 'outline';
}

const solidVariant: BuitUIProps = {
  color: 'white',
  bgColor: 'primary',
};
const ghostVariant: BuitUIProps = {
  bgColor: 'transparent',
  color: 'primary',
};

const outlineVariant: BuitUIProps = {
  ...ghostVariant,
  border: '1px solid currentColor',
};

const variants = {
  solid: solidVariant,
  ghost: ghostVariant,
  outline: outlineVariant,
};

const base: BuitUIProps = {
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
