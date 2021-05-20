import { ComponentType } from 'react';
import { DomElement } from './components/HTML/HTML';

type AllCss = 'inherit' | 'initial' | 'unset';
export interface BorderProperties {
  borderRadius: string | number | AllCss;
  /**
   * shorcut for borderRadius
   */
  border: string | number | AllCss;
  borderTop: BorderProperties['border'];
  borderRight: BorderProperties['border'];
  borderBottom: BorderProperties['border'];
  borderLeft: BorderProperties['border'];
  outline: string | AllCss;

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
  color: string | AllCss;
  /**
   * shortcut for color
   */
  c: ColorProperties['color'];
}

export interface BackgroundProperties {
  background: string | AllCss;
  backgroundColor: string | AllCss;
  backgroundImage: string | AllCss;

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
  padding: string | number | AllCss;
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
  width: string | number | AllCss;
  height: string | number | AllCss;

  minWidth: string | number | AllCss;
  maxWidth: string | number | AllCss;
  minHeight: string | number | AllCss;
  maxHeight: string | number | AllCss;

  boxSizing: 'content-box' | 'border-box' | AllCss;

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
  margin: string | number | AllCss;
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
  overflow: 'hidden' | 'scroll' | 'visible' | 'auto' | string | AllCss;
  overflowX: OverflowProperties['overflow'];
  overflowY: OverflowProperties['overflow'];
}

export interface FontProperties {
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | number | AllCss;
  fontSize: string | number | AllCss;
  fontFamily: string | AllCss;
  textDecoration: string | AllCss;
  textTransform: 'uppercase' | 'capitalize' | 'lowercase';
  textOrientation: string | AllCss;
  textAlign: 'center' | 'left' | 'right' | AllCss;
}

export interface PositionProperties {
  position: string | AllCss;
  top: string | AllCss;
  left: string | AllCss;
  right: string | AllCss;
  bottom: string | AllCss;
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
  styleAs: string;
  as: DomElement;
}

export interface AnimationProperties {
  transform: string | AllCss;
  transformOrigin: string | AllCss;
  transitionDuration: string | number | AllCss;
  transitionProperty: string | number | AllCss;
}

type FlexGridValues =
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center'
  | 'end'
  | 'start'
  | 'stretch';

export interface FlexGridProperties {
  justifyContent: FlexGridValues | string | AllCss;
  justifyItems: FlexGridValues | string | AllCss;
  justifySelf: FlexGridValues | string | AllCss;
  alignItems: FlexGridValues | string | AllCss;
  alignContent: FlexGridValues | string | AllCss;
  alignSelf: FlexGridValues | string | AllCss;
  placeItems: FlexGridValues | string | AllCss;
  placeContent: FlexGridValues | string | AllCss;
  placeSelf: FlexGridValues | string | AllCss;
  flex: string | AllCss;
  flexDirection: 'column' | 'column-reverse' | 'row' | 'row-reverse' | AllCss;
  flexWrap: 'wrap' | 'no-wrap' | 'wrap-reverse' | AllCss;
  flexGrow: string | AllCss;
  flexShrink: string | AllCss;
  grid: string | AllCss;
  gridTemplateColumns: string | AllCss;
  gridAutoColumns: string | AllCss;
  gridAutoRows: string | AllCss;
  gridAutoFlow: string | AllCss;
  gridTemplateRows: string | AllCss;
  gridTemplateAreas: string | AllCss;
  gridTemplate: string | AllCss;
  gridColumnStart: string | AllCss;
  gridColumnEnd: string | AllCss;
  gridRowStart: string | AllCss;
  gridRowEnd: string | AllCss;
  gridColumn: string | AllCss;
  gridRow: string | AllCss;
  gridArea: string | AllCss;
  columnGap: string | AllCss;
  rowGap: string | AllCss;
  gap: string | AllCss;
}

type Cursor =
  | 'url'
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out'
  | 'grab'
  | 'grabbing';

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
  boxShadow: string | AllCss;

  cursor: Cursor | string | AllCss;

  resize: 'none' | 'both' | 'horizontal' | 'vertical' | AllCss;

  objectFit: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down' | AllCss;
  objectPosition: 'cover' | 'contain' | 'none' | 'fill' | 'scale-down' | AllCss;
  zIndex: number | AllCss;
  listStyle: string | AllCss;
}

export type QuaantumProps = { [P in keyof Css]?: Css[P] };

type Internal = {
  componentName?: string;
};

export type InternalProps<T extends QuaantumProps> = T & Internal;

export type Props<T> = T extends ComponentType<infer S> ? S : T;
