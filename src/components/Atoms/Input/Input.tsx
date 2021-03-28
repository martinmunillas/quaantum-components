import React, { InputHTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { BuitUIProps, Internal } from '../../../types';
import { useGenCss } from '../../../utils/hooks/useGenCss';
import { ctx } from '../../Providers/BuitProvider/BuitProvider';

export interface InputProps extends BuitUIProps, InputHTMLAttributes<HTMLInputElement> {}

type InputWithoutContextProps = InputProps & Internal;

const InputWithoutContext = styled.input<InputWithoutContextProps>(
  ([] as unknown) as TemplateStringsArray,
  ({ genCss, ...props }: InputWithoutContextProps) =>
    genCss({
      ...props.componentCtx.base,
      ...props.componentCtx.variants[
        props?.variant && props?.variant in props.componentCtx.variants
          ? props?.variant
          : props.componentCtx.defaultVariant
      ],
      ...props,
    })
);

const Input: React.FC<InputProps> = (props) => {
  const genCss = useGenCss();
  const { components } = useContext(ctx);
  return <InputWithoutContext {...props} genCss={genCss} componentCtx={components?.input} />;
};

export default Input;
