import {
  QuaantumProps,
  ColorProperties,
  BackgroundProperties,
  BorderProperties,
  SizeProperties,
  MarginProperties,
  PaddingProperties,
  OverflowProperties,
  FontProperties,
  DisplayProperties,
  FlexGridProperties,
  PositionProperties,
  PseudoClasses,
  PseudoElements,
  AnimationProperties,
} from './types';

type UseKeys<T extends Record<any, any>> = Record<keyof T, string>;

const colorProps: UseKeys<ColorProperties> = {
  color: 'color',
  c: 'color',
};

const backgroundProps: UseKeys<BackgroundProperties> = {
  background: 'background',
  backgroundColor: 'background-color',
  backgroundImage: 'background-image',
  bg: 'background',
  bgColor: 'background-color',
  bgImage: 'background-image',
};

const borderProps: UseKeys<BorderProperties> = {
  border: 'border',
  borderBottom: 'border-bottom',
  borderLeft: 'border-left',
  borderRight: 'border-right',
  borderTop: 'border-top',
  borderRadius: 'border-radius',
  outline: 'outline',
  b: 'border',
  bb: 'border-bottom',
  bl: 'border-left',
  br: 'border-right',
  bt: 'border-top',
  r: 'border-radius',
  round: 'border-radius',
};

const sizeProps: UseKeys<SizeProperties> = {
  height: 'height',
  maxHeight: 'max-height',
  width: 'width',
  maxW: 'max-width',
  maxWidth: 'max-width',
  minH: 'min-height',
  minHeight: 'min-height',
  minW: 'min-width',
  minWidth: 'min-width',
  w: 'width',
  maxH: 'max-height',
  h: 'height',
};

const marginProps: UseKeys<MarginProperties> = {
  margin: 'margin',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',
  marginTop: 'margin-top',
  marginX: 'a',
  marginY: 'a',
  m: 'margin',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mx: 'a',
  my: 'a',
};

const paddingProps: UseKeys<PaddingProperties> = {
  padding: 'padding',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
  paddingTop: 'padding-top',
  paddingX: 'a',
  paddingY: 'a',
  p: 'padding',
  pb: 'padding-bottom',
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  px: 'a',
  py: 'a',
};

const overflowProps: UseKeys<OverflowProperties> = {
  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
};

const fontProps: UseKeys<FontProperties> = {
  fontWeight: 'font-weight',
  fontSize: 'font-size',
  textDecoration: 'text-decoration',
  fontFamily: 'font-family',
  textTransform: 'text-transform',
  textOrientation: 'text-orientation',
  textAlign: 'text-align',
};

const displayProps: UseKeys<DisplayProperties> = {
  display: 'display',
  d: 'display',
};

const flexGridProps: UseKeys<FlexGridProperties> = {
  justifyContent: 'justify-content',
  justifyItems: 'justify-items',
  justifySelf: 'justify-self',
  alignItems: 'align-items',
  alignContent: 'align-content',
  alignSelf: 'align-self',
  placeItems: 'place-items',
  placeContent: 'place-content',
  placeSelf: 'place-self',
  columnGap: 'column-gap',
  gap: 'gap',
  rowGap: 'row-gap',
  flex: 'flex',
  flexDirection: 'flex-direction',
  flexWrap: 'flex-wrap',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  grid: 'grid',
  gridArea: 'grid-area',
  gridTemplate: 'grid-template',
  gridTemplateAreas: 'grid-template-areas',
  gridTemplateColumns: 'grid-template-columns',
  gridTemplateRows: 'grid-template-rows',
  gridAutoFlow: 'grid-auto-flow',
  gridAutoColumns: 'grid-auto-columns',
  gridAutoRows: 'grid-auto-row',
  gridColumn: 'grid-auto-column',
  gridColumnEnd: 'grid-column-end',
  gridColumnStart: 'grid-column-start',
  gridRow: 'grid-row',
  gridRowStart: 'grid-row-start',
  gridRowEnd: 'grid-row-end',
};

const positionProps: UseKeys<PositionProperties> = {
  position: 'position',
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
};

const pseudoClasses: UseKeys<PseudoClasses> = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus',
  _placeholder: '&::placeholder',
};

const pseudoElements: UseKeys<PseudoElements> = {
  _before: '&::before',
  _after: '&::after',
  content: 'content',
};

const animationProps: UseKeys<AnimationProperties> = {
  transform: 'transform',
  transformOrigin: 'transform-origin',
  transitionDuration: 'transition-duration',
  transitionProperty: 'transition-property',
};

export const dictionary: UseKeys<Omit<Required<QuaantumProps>, 'variant' | 'customCss'>> = {
  ...colorProps,
  ...backgroundProps,
  ...borderProps,
  ...borderProps,
  ...sizeProps,
  ...marginProps,
  ...paddingProps,
  ...overflowProps,
  ...fontProps,
  ...displayProps,
  ...flexGridProps,
  ...positionProps,
  ...pseudoClasses,
  ...pseudoElements,
  ...animationProps,
  boxShadow: 'box-shadow',
  cursor: 'cursor',
  resize: 'resize',
  objectFit: 'object-fit',
  objectPosition: 'object-position',
  zIndex: 'z-index',
  listStyle: 'list-style',
};

export const internalProps = [...Object.keys(dictionary), 'componentCtx', 'variant', 'genCss'];
