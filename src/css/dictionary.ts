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
  border: Resolver.measurement('border', 'measurement'),
  borderBottom: Resolver.measurement('border-bottom', 'measurement'),
  borderLeft: Resolver.measurement('border-left', 'measurement'),
  borderRight: Resolver.measurement('border-right', 'measurement'),
  borderTop: Resolver.measurement('border-top', 'measurement'),
  borderRadius: Resolver.measurement('border-radius', 'measurement'),
  outline: Resolver.measurement('outline', 'measurement'),
  b: Resolver.measurement('border', 'measurement'),
  bb: Resolver.measurement('border-bottom', 'measurement'),
  bl: Resolver.measurement('border-left', 'measurement'),
  br: Resolver.measurement('border-right', 'measurement'),
  bt: Resolver.measurement('border-top', 'measurement'),
  r: Resolver.measurement('border-radius', 'measurement'),
  round: Resolver.measurement('border-radius', 'measurement'),
};

const sizeProps: KeysToResolvers<SizeProperties> = {
  height: Resolver.measurement('height', 'measurement'),
  maxHeight: Resolver.measurement('max-height', 'measurement'),
  width: Resolver.measurement('width', 'measurement'),
  maxW: Resolver.measurement('max-width', 'measurement'),
  maxWidth: Resolver.measurement('max-width', 'measurement'),
  minH: Resolver.measurement('min-height', 'measurement'),
  minHeight: Resolver.measurement('min-height', 'measurement'),
  minW: Resolver.measurement('min-width', 'measurement'),
  minWidth: Resolver.measurement('min-width', 'measurement'),
  w: Resolver.measurement('width', 'measurement'),
  maxH: Resolver.measurement('max-height', 'measurement'),
  h: Resolver.measurement('height', 'measurement'),
  boxSizing: Resolver.general('box-sizing'),
};

const marginProps: KeysToResolvers<MarginProperties> = {
  margin: Resolver.measurement('margin', 'measurement'),
  marginBottom: Resolver.measurement('margin-block-end', 'measurement'),
  marginLeft: Resolver.measurement('margin-inline-start', 'measurement'),
  marginRight: Resolver.measurement('margin-inline-end', 'measurement'),
  marginTop: Resolver.measurement('margin-block-start', 'measurement'),
  marginX: Resolver.measurement('margin-inline', 'measurement'),
  marginY: Resolver.measurement('margin-block', 'measurement'),
  m: Resolver.measurement('margin', 'measurement'),
  mb: Resolver.measurement('margin-block-end', 'measurement'),
  ml: Resolver.measurement('margin-inline-start', 'measurement'),
  mr: Resolver.measurement('margin-inline-end', 'measurement'),
  mt: Resolver.measurement('margin-block-start', 'measurement'),
  mx: Resolver.measurement('margin-inline', 'measurement'),
  my: Resolver.measurement('margin-block', 'measurement'),
};

const paddingProps: KeysToResolvers<PaddingProperties> = {
  padding: Resolver.measurement('padding', 'measurement'),
  paddingBottom: Resolver.measurement('padding-block-end', 'measurement'),
  paddingLeft: Resolver.measurement('padding-inline-start', 'measurement'),
  paddingRight: Resolver.measurement('padding-inline-end', 'measurement'),
  paddingTop: Resolver.measurement('padding-block-start', 'measurement'),
  paddingX: Resolver.measurement('padding-inline', 'measurement'),
  paddingY: Resolver.measurement('padding-block', 'measurement'),
  p: Resolver.measurement('padding', 'measurement'),
  pb: Resolver.measurement('padding-block-end', 'measurement'),
  pl: Resolver.measurement('padding-inline-start', 'measurement'),
  pr: Resolver.measurement('padding-inline-end', 'measurement'),
  pt: Resolver.measurement('padding-block-start', 'measurement'),
  px: Resolver.measurement('padding-inline', 'measurement'),
  py: Resolver.measurement('padding-block', 'measurement'),
};

const overflowProps: KeysToResolvers<OverflowProperties> = {
  overflow: Resolver.general('overflow'),
  overflowX: Resolver.general('overflow-x'),
  overflowY: Resolver.general('overflow-y'),
};

const fontProps: KeysToResolvers<FontProperties> = {
  fontWeight: Resolver.general('font-weight'),
  fontSize: Resolver.general('font-size'),
  textDecoration: Resolver.general('text-decoration'),
  fontFamily: Resolver.general('font-family'),
  textTransform: Resolver.general('text-transform'),
  textOrientation: Resolver.general('text-orientation'),
  textAlign: Resolver.general('text-align'),
};

const displayProps: KeysToResolvers<DisplayProperties> = {
  display: Resolver.general('display'),
  d: Resolver.general('display'),
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
  gridAutoRows: Resolver.general('grid-auto-row'),
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
  strokeWidth: Resolver.measurement('stroke-width', 'measurement'),
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
  boxShadow: Resolver.general('box-shadow'),
  cursor: Resolver.general('cursor'),
  resize: Resolver.general('resize'),
  objectFit: Resolver.general('object-fit'),
  objectPosition: Resolver.general('object-position'),
  zIndex: Resolver.general('z-index'),
  listStyle: Resolver.general('list-style'),
};

export const internalProps = [
  ...Object.keys(dictionary),
  'variant',
  'styleAs',
  'customCss',
  'componentName',
];
