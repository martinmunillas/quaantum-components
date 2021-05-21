interface RawProps {
  /**
   * generated css string
   */
  styles: string;
}

export const styledProps = [
  ([] as unknown) as TemplateStringsArray,
  (props: RawProps & any) => props.styles,
] as const;
