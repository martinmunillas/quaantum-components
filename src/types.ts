import { ComponentCtx } from './defaults/theme';
import { GenCss } from './utils/hooks/useGenCss';

export interface BorderProperties {
  borderRadius: string | number;
  /**
   * shorcut for borderRadius
   */
  border: string | number;
  borderTop: BorderProperties['border'];
  borderRight: BorderProperties['border'];
  borderBottom: BorderProperties['border'];
  borderLeft: BorderProperties['border'];
  outline: string;

  round: BorderProperties['borderRadius'];
  /**
   * shorcut for borderRadius
   */
  r: BorderProperties['borderRadius'];
  /**
   * shorcut for border
   */
  b: BorderProperties['border'];
  /**
   * shorcut for borderTop
   */
  bt: BorderProperties['borderTop'];
  /**
   * shorcut for borderRight
   */
  br: BorderProperties['borderRight'];
  /**
   * shorcut for borderBottom
   */
  bb: BorderProperties['borderBottom'];
  /**
   * shorcut for borderLeft
   */
  bl: BorderProperties['borderLeft'];
}

export interface ColorProperties {
  color: string;
  /**
   * shortcut for color
   */
  c: ColorProperties['color'];
}

export interface BackgroundProperties {
  background: string;
  backgroundColor: string;
  backgroundImage: string;

  /**
   * shortcut for background
   */
  bg: BackgroundProperties['background'];

  /**
   * shortcut for backgroundColor
   */
  bgColor: BackgroundProperties['backgroundColor'];

  /**
   * shortcut for backgroundImage
   */
  bgImage: BackgroundProperties['backgroundImage'];
}

export interface PaddingProperties {
  padding: string | number;
  paddingX: PaddingProperties['padding'];
  paddingY: PaddingProperties['padding'];
  paddingTop: PaddingProperties['padding'];
  paddingRight: PaddingProperties['padding'];
  paddingBottom: PaddingProperties['padding'];
  paddingLeft: PaddingProperties['padding'];
  /**
   * shortcut for padding
   */
  p: PaddingProperties['padding'];
  /**
   * shortcut for paddingX
   */
  px: PaddingProperties['paddingX'];
  /**
   * shortcut for paddingY
   */
  py: PaddingProperties['paddingY'];
  /**
   * shortcut for paddingTop
   */
  pt: PaddingProperties['paddingTop'];
  /**
   * shortcut for paddingRight
   */
  pr: PaddingProperties['paddingRight'];
  /**
   * shortcut for paddingBottom
   */
  pb: PaddingProperties['paddingBottom'];
  /**
   * shortcut for paddingLeft
   */
  pl: PaddingProperties['paddingLeft'];
}

export interface SizeProperties {
  width: string | number;
  height: string | number;

  minWidth: string | number;
  maxWidth: string | number;
  minHeight: string | number;
  maxHeight: string | number;

  /**
   * shortcut for width
   */
  w: SizeProperties['width'];

  /**
   * shortcut for height
   */
  h: SizeProperties['height'];

  /**
   * shortcut for minWidth
   */
  minW: SizeProperties['minWidth'];
  /**
   * shortcut for maxWidth
   */
  maxW: SizeProperties['maxWidth'];
  /**
   * shortcut for minHeight
   */
  minH: SizeProperties['minHeight'];
  /**
   * shortcut for maxHeight
   */
  maxH: SizeProperties['maxHeight'];
}

export interface MarginProperties {
  margin: string | number;
  marginX: MarginProperties['margin'];
  marginY: MarginProperties['margin'];
  marginTop: MarginProperties['margin'];
  marginRight: MarginProperties['margin'];
  marginBottom: MarginProperties['margin'];
  marginLeft: MarginProperties['margin'];
  /**
   * shorcut for margin
   */
  m: MarginProperties['margin'];
  /**
   * shorcut for marginX
   */
  mx: MarginProperties['marginX'];
  /**
   * shorcut for marginY
   */
  my: MarginProperties['marginY'];
  /**
   * shorcut for marginTop
   */
  mt: MarginProperties['marginTop'];
  /**
   * shorcut for marginRight
   */
  mr: MarginProperties['marginRight'];
  /**
   * shorcut for marginBottom
   */
  mb: MarginProperties['marginBottom'];
  /**
   * shorcut for marginLeft
   */
  ml: MarginProperties['marginLeft'];
}

export interface DisplayProperties {
  display:
    | 'flex'
    | 'grid'
    | 'inline-flex'
    | 'inline-grid'
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'none';

  /**
   * shortcut for display
   */
  d: Css['display'];
}

export interface OverflowProperties {
  overflow: 'hidden' | 'scroll' | string;
  overflowX: 'hidden' | 'scroll' | string;
  overflowY: 'hidden' | 'scroll' | string;
}

export interface FontProperties {
  fontWeight: number;
  fontSize: string | number;
  fontFamily: string;
  textDecoration: string;
  textTransform: 'uppercase' | 'capitalize' | 'lowecase';
  textOrientation: string;
  textAlign: 'center' | 'left' | 'right';
}

export interface PositionProperties {
  position: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
}

export interface PseudoElements {
  _after: Omit<QuaantumProps, '_after'>;
  _before: Omit<QuaantumProps, '_before'>;
  content: string;
}

export interface PseudoClasses {
  _focus: Omit<QuaantumProps, '_focus'>;
  _hover: Omit<QuaantumProps, '_hover'>;
  _active: Omit<QuaantumProps, '_active'>;
  _placeholder: Omit<QuaantumProps, '_placeholder'>;
}

export interface QuaantumProperties {
  variant: string;
  customCss: string;
}

export interface AnimationProperties {
  transform: string;
  transformOrigin: string;
  transitionDuration: string | number;
  transitionProperty: string | number;
}

export interface FlexGridProperties {
  justifyContent: string;
  justifyItems: string;
  justifySelf: string;
  alignItems: string;
  alignContent: string;
  alignSelf: string;
  placeItems: string;
  placeContent: string;
  placeSelf: string;
  flex: string;
  flexDirection: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  flexWrap: 'wrap' | 'no-wrap' | 'wrap-reverse';
  flexGrow: string;
  flexShrink: string;
  grid: string;
  gridTemplateColumns: string;
  gridAutoColumns: string;
  gridAutoRows: string;
  gridAutoFlow: string;
  gridTemplateRows: string;
  gridTemplateAreas: string | string[];
  gridTemplate: string;
  gridColumnStart: string;
  gridColumnEnd: string;
  gridRowStart: string;
  gridRowEnd: string;
  gridColumn: string;
  gridRow: string;
  gridArea: string;
  columnGap: string;
  rowGap: string;
  gap: string;
}

export interface Css
  extends BorderProperties,
    ColorProperties,
    BackgroundProperties,
    PaddingProperties,
    SizeProperties,
    MarginProperties,
    DisplayProperties,
    OverflowProperties,
    FontProperties,
    PositionProperties,
    PseudoElements,
    PseudoClasses,
    QuaantumProperties,
    AnimationProperties,
    FlexGridProperties {
  boxShadow: string;

  cursor: string;

  resize: 'none' | 'both' | 'horizontal' | 'vertical';

  objectFit: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down';
  objectPosition: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down';
  zIndex: number;
  listStyle: string;
}

export type QuaantumProps = { [P in keyof Css]?: Css[P] | 'inherit' | 'initial' | 'unset' };
interface Internal {
  componentCtx: ComponentCtx;
  genCss: GenCss;
}

export type InternalProps<T extends QuaantumProps> = T & Internal;
