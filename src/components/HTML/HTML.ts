import styled from 'styled-components';
import { BuitUIProps, Internal } from '../../types';

export type HTMLProps = Internal & BuitUIProps;

const gen = <T extends HTMLProps>(props: T) =>
  props.genCss({
    ...props.componentCtx.base,
    ...props.componentCtx.variants?.[props.variant || props.componentCtx.defaultVariant],
    ...props,
  });

const arr = ([] as unknown) as TemplateStringsArray;

export const RawDiv = styled.div<HTMLProps>(arr, gen);
export const RawMain = styled.main<HTMLProps>(arr, gen);
export const RawArticle = styled.article<HTMLProps>(arr, gen);
export const RawSection = styled.section<HTMLProps>(arr, gen);
export const RawAside = styled.aside<HTMLProps>(arr, gen);
export const RawH1 = styled.h1<HTMLProps>(arr, gen);
export const RawH2 = styled.h2<HTMLProps>(arr, gen);
export const RawH3 = styled.h3<HTMLProps>(arr, gen);
export const RawH4 = styled.h4<HTMLProps>(arr, gen);
export const RawH5 = styled.h5<HTMLProps>(arr, gen);
export const RawH6 = styled.h6<HTMLProps>(arr, gen);
export const RawInput = styled.input<HTMLProps>(arr, gen);
export const RawTextarea = styled.textarea<HTMLProps>(arr, gen);
export const RawButton = styled.button<HTMLProps>(arr, gen);
export const RawP = styled.p<HTMLProps>(arr, gen);
