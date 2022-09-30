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
  QuaantumProperties,
  SVGProperties,
} from './types';
import { Config } from './/resolvers/resolve';
import { Resolver } from './/resolvers/Resolver';

type KeysToResolvers<T extends Record<any, any>> = Record<
  keyof T,
  (prop: any, config: Config) => string
>;

const colorProps: KeysToResolvers<ColorProperties> = {
  color: Resolver.color(),
  c: Resolver.color(),
};

const backgroundProps: KeysToResolvers<BackgroundProperties> = {
  background: Resolver.general('background'),
  backgroundColor: Resolver.color('background-color'),
  backgroundImage: Resolver.general('background-image'),
  bg: Resolver.general('background'),
  bgColor: Resolver.color('background-color'),
  bgImage: Resolver.general('background-image'),
};

const borderProps: KeysToResolvers<BorderProperties> = {
  border: Resolver.measurement('border'),
  borderColor: Resolver.color('border-color'),
  borderWidth: Resolver.measurement('border-width'),
  borderStyle: Resolver.general('border-style'),
  borderBottom: Resolver.measurement('border-bottom'),
  borderBottomColor: Resolver.color('border-bottom-color'),
  borderBottomWidth: Resolver.measurement('border-bottom-width'),
  borderBottomStyle: Resolver.general('border-bottom-style'),
  borderLeft: Resolver.measurement('border-left'),
  borderLeftColor: Resolver.color('border-left-color'),
  borderLeftWidth: Resolver.measurement('border-left-width'),
  borderLeftStyle: Resolver.general('border-left-style'),
  borderRight: Resolver.measurement('border-right'),
  borderRightColor: Resolver.color('border-right-color'),
  borderRightWidth: Resolver.measurement('border-right-width'),
  borderRightStyle: Resolver.general('border-right-style'),
  borderTop: Resolver.measurement('border-top'),
  borderTopColor: Resolver.color('border-top-color'),
  borderTopWidth: Resolver.measurement('border-top-width'),
  borderTopStyle: Resolver.general('border-top-style'),
  borderRadius: Resolver.measurement('border-radius'),
  borderCollapse: Resolver.general('border-collapse'),
  outline: Resolver.measurement('outline'),
  b: Resolver.measurement('border'),
  bb: Resolver.measurement('border-bottom'),
  bl: Resolver.measurement('border-left'),
  br: Resolver.measurement('border-right'),
  bt: Resolver.measurement('border-top'),
  r: Resolver.measurement('border-radius'),
  round: Resolver.measurement('border-radius'),
  radius: Resolver.measurement('border-radius'),
};

const sizeProps: KeysToResolvers<SizeProperties> = {
  height: Resolver.measurement('height'),
  maxHeight: Resolver.measurement('max-height'),
  width: Resolver.measurement('width'),
  maxW: Resolver.measurement('max-width'),
  maxWidth: Resolver.measurement('max-width'),
  minH: Resolver.measurement('min-height'),
  minHeight: Resolver.measurement('min-height'),
  minW: Resolver.measurement('min-width'),
  minWidth: Resolver.measurement('min-width'),
  w: Resolver.measurement('width'),
  maxH: Resolver.measurement('max-height'),
  h: Resolver.measurement('height'),
  boxSizing: Resolver.general('box-sizing'),
};

const marginProps: KeysToResolvers<MarginProperties> = {
  margin: Resolver.measurement('margin'),
  marginBottom: Resolver.measurement('margin-block-end'),
  marginLeft: Resolver.measurement('margin-inline-start'),
  marginRight: Resolver.measurement('margin-inline-end'),
  marginTop: Resolver.measurement('margin-block-start'),
  marginX: Resolver.measurement('margin-inline'),
  marginY: Resolver.measurement('margin-block'),
  m: Resolver.measurement('margin'),
  mb: Resolver.measurement('margin-block-end'),
  ml: Resolver.measurement('margin-inline-start'),
  mr: Resolver.measurement('margin-inline-end'),
  mt: Resolver.measurement('margin-block-start'),
  mx: Resolver.measurement('margin-inline'),
  my: Resolver.measurement('margin-block'),
};

const paddingProps: KeysToResolvers<PaddingProperties> = {
  padding: Resolver.measurement('padding'),
  paddingBottom: Resolver.measurement('padding-block-end'),
  paddingLeft: Resolver.measurement('padding-inline-start'),
  paddingRight: Resolver.measurement('padding-inline-end'),
  paddingTop: Resolver.measurement('padding-block-start'),
  paddingX: Resolver.measurement('padding-inline'),
  paddingY: Resolver.measurement('padding-block'),
  p: Resolver.measurement('padding'),
  pb: Resolver.measurement('padding-block-end'),
  pl: Resolver.measurement('padding-inline-start'),
  pr: Resolver.measurement('padding-inline-end'),
  pt: Resolver.measurement('padding-block-start'),
  px: Resolver.measurement('padding-inline'),
  py: Resolver.measurement('padding-block'),
};

const overflowProps: KeysToResolvers<OverflowProperties> = {
  overflow: Resolver.general('overflow'),
  overflowX: Resolver.general('overflow-x'),
  overflowY: Resolver.general('overflow-y'),
};

const fontProps: KeysToResolvers<FontProperties> = {
  fontWeight: Resolver.general('font-weight'),
  fontSize: Resolver.measurement('font-size', 'font'),
  textDecoration: Resolver.general('text-decoration'),
  fontFamily: Resolver.general('font-family'),
  textTransform: Resolver.general('text-transform'),
  textOrientation: Resolver.general('text-orientation'),
  textAlign: Resolver.general('text-align'),
  whiteSpace: Resolver.general('white-space'),
  lineHeight: Resolver.measurement('line-height'),
  fontStyle: Resolver.general('font-style'),
  wordBreak: Resolver.general('word-break'),
  wordWrap: Resolver.general('word-wrap'),
  letterSpacing: Resolver.general('letter-spacing'),
};

const displayProps: KeysToResolvers<DisplayProperties> = {
  display: Resolver.general('display'),
  d: Resolver.general('display'),
  float: Resolver.general('float'),
};

const flexGridProps: KeysToResolvers<FlexGridProperties> = {
  justifyContent: Resolver.general('justify-content'),
  justifyItems: Resolver.general('justify-items'),
  justifySelf: Resolver.general('justify-self'),
  alignItems: Resolver.general('align-items'),
  alignContent: Resolver.general('align-content'),
  alignSelf: Resolver.general('align-self'),
  placeItems: Resolver.general('place-items'),
  placeContent: Resolver.general('place-content'),
  placeSelf: Resolver.general('place-self'),
  columnGap: Resolver.general('column-gap'),
  gap: Resolver.general('gap'),
  rowGap: Resolver.general('row-gap'),
  flex: Resolver.general('flex'),
  flexDirection: Resolver.general('flex-direction'),
  flexWrap: Resolver.general('flex-wrap'),
  flexGrow: Resolver.general('flex-grow'),
  flexShrink: Resolver.general('flex-shrink'),
  flexBasis: Resolver.general('flex-basis'),
  grid: Resolver.general('grid'),
  gridArea: Resolver.general('grid-area'),
  gridTemplate: Resolver.general('grid-template'),
  gridTemplateAreas: Resolver.general('grid-template-areas'),
  gridTemplateColumns: Resolver.general('grid-template-columns'),
  gridTemplateRows: Resolver.general('grid-template-rows'),
  gridAutoFlow: Resolver.general('grid-auto-flow'),
  gridAutoColumns: Resolver.general('grid-auto-columns'),
  gridAutoRows: Resolver.general('grid-auto-rows'),
  gridColumn: Resolver.general('grid-auto-column'),
  gridColumnEnd: Resolver.general('grid-column-end'),
  gridColumnStart: Resolver.general('grid-column-start'),
  gridRow: Resolver.general('grid-row'),
  gridRowStart: Resolver.general('grid-row-start'),
  gridRowEnd: Resolver.general('grid-row-end'),
};

const positionProps: KeysToResolvers<PositionProperties> = {
  position: Resolver.general('position'),
  top: Resolver.general('top'),
  left: Resolver.general('left'),
  right: Resolver.general('right'),
  bottom: Resolver.general('bottom'),
};

const pseudoClasses: KeysToResolvers<PseudoClasses> = {
  _hover: Resolver.pseudo(':hover'),
  _active: Resolver.pseudo(':active'),
  _focus: Resolver.pseudo(':focus'),
  _placeholder: Resolver.pseudo('::placeholder'),
};

const pseudoElements: KeysToResolvers<PseudoElements> = {
  _before: Resolver.pseudo('::before'),
  _after: Resolver.pseudo('::after'),
  content: Resolver.general('content'),
};

const animationProps: KeysToResolvers<AnimationProperties> = {
  transform: Resolver.general('transform'),
  transformOrigin: Resolver.general('transform-origin'),
  transition: Resolver.general('transition'),
  transitionDuration: Resolver.measurement('transition-duration', 'speed'),
  transitionProperty: Resolver.general('transition-property'),
  animation: Resolver.general('animation'),
  animationName: Resolver.general('animation-name'),
  animationDuration: Resolver.measurement('animation-duration', 'speed'),
  animationTimingFunction: Resolver.general('animation-timing-function'),
  animationDelay: Resolver.measurement('animation-delay', 'speed'),
  animationIterationCount: Resolver.general('animation-iteration-count'),
  animationDirection: Resolver.general('animation-direction'),
  animationFillMode: Resolver.general('animation-fill-mode'),
  animationPlayState: Resolver.general('animation-play-state'),
};

const svgProperties: KeysToResolvers<SVGProperties> = {
  stroke: Resolver.color('stroke'),
  fill: Resolver.color('fill'),
  strokeWidth: Resolver.measurement('stroke-width'),
  strokeDasharray: Resolver.general('stroke-dasharray'),
  strokeLinecap: Resolver.general('stroke-linecap'),
};

export const dictionary: KeysToResolvers<
  Omit<Required<QuaantumProps>, keyof QuaantumProperties>
> = {
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
  ...svgProperties,
  userSelect: Resolver.general('user-select'),
  boxShadow: Resolver.general('box-shadow'),
  shadow: Resolver.general('box-shadow'),
  cursor: Resolver.general('cursor'),
  resize: Resolver.general('resize'),
  objectFit: Resolver.general('object-fit'),
  objectPosition: Resolver.general('object-position'),
  zIndex: Resolver.general('z-index'),
  listStyle: Resolver.general('list-style'),
  clipPath: Resolver.general('clip-path'),
  perspective: Resolver.general('perspective'),
};

export const internalProps = [
  ...Object.keys(dictionary),
  'variant',
  'styleAs',
  'customCss',
  'custom',
  'componentName',
];
