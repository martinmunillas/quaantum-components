import styled from 'styled-components';
import { colors } from '../../../defaults';
import { BuitUIProps } from '../../../types';

export interface ButtonProps extends BuitUIProps {
  variant?: 'solid' | 'outline';
}

const solidVariant = (props: ButtonProps) => `
  color: ${colors['white']};
  background: ${colors[props.color || 'defaultColor']};
`;

const outlineVariant = (props: ButtonProps) => `
  color: ${colors[props.color || 'defaultColor']};
  border: 2px solid ${colors[props.color || 'defaultColor']};
  background-color: transparent;
`;

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: ${({ round }) => (typeof round === 'number' ? `${round}px` : round) || '50px'};
  padding: 10px 20px;
  font-weight: 600;
  min-width: 100px;
  max-width: 300px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  ${(props) => (props.variant === 'solid' ? solidVariant(props) : outlineVariant(props))}

  &:focus ${({ _focus }) =>
    _focus
      ? _focus
      : `{
    box-shadow: 1px 1px 1px 1px blue;
  }`}
`;

export default Button;
