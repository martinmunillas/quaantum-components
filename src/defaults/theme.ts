import { QuaantumProps } from '../css/types';
import { global } from './global';
import { Button } from '../components/Atoms/Button/Button.defaultStyles';
import { Flex } from '../components/Atoms/Flex/Flex.defaultStyles';
import { Input } from '../components/Atoms/Input/Input.defaultStyles';
import { TextArea } from '../components/Atoms/TextArea/TextArea.defaultProps';
import { Text } from '../components/Atoms/Text/Text.defaultStyles';
import { Grid } from '../components/Atoms/Grid/Grid.defaultStyles';
import { Box } from '../components/Atoms/Box/Box.defaultStyles';
import { Heading } from '../components/Atoms/Heading/Heading.defaultStyles';
import { Img } from '../components/Atoms/Img/Img.defaultStyles';
import { Link } from '../components/Atoms/Link/Link.defaultStyles';
import { ListItem } from '../components/Atoms/ListItem/ListItem.defaultStyles';
import { UnorderedList } from '../components/Atoms/UnorderedList/UnorderedList.defaultStyles';
import { OrderedList } from '../components/Atoms/OrderedList/OrderedList.defaultStyles';
import { Chart } from '../components/Organisms/Charts/Chart.defaultStyles';
import { ChartAxes } from '../components/Organisms/Charts/childs/Axes/ChartAxes.defaultStyles';
import { ChartAxis } from '../components/Organisms/Charts/childs/Axis/ChartAxis.defaultStyles';
import { ChartLine } from '../components/Organisms/Charts/childs/Line/ChartLine.defaultStyles';
import { ChartBars } from '../components/Organisms/Charts/childs/Bars/ChartBars.defaultStyles';
import { ChartTitle } from '../components/Organisms/Charts/childs/Title/ChartTitle.defaultStyles';
import { Modal } from '../components/Organisms/Modals/Modal.defaultStyles';
import { CloseButton } from '../components/Organisms/Modals/childs/CloseButton/ModalCloseButton.defaultStyles';

export interface VariantsCtx {
  [variant: string]: QuaantumProps;
}

export type ColorsCtx = any;

export interface ComponentCtx {
  base: QuaantumProps;
  variants: VariantsCtx;
  defaultVariant: string;
}

export interface Components {
  [component: string]: ComponentCtx;
}

export interface Global {
  [selector: string]: QuaantumProps;
}

export interface Units {
  /**
   * for using just numbers in measurement properties, like width, margin, etc.
   */
  measurement: string;
  /**
   * for using just numbers in speed properties like animationDuration.
   */
  speed: string;
}
export interface Theme {
  colors: ColorsCtx;
  font?: string;
  components: Components;
  global?: Global;
  units: Units;
  /**
   * This will add default focus styles to all tabbable elements
   */
  mainFocus: QuaantumProps;
}

export const theme: Theme = {
  global,
  colors: {
    black: '#121212',
    white: '#eeeeee',
    primary: '#345674',
    secondary: '#787123',
    tertiary: '#555978',
  },
  units: {
    measurement: 'em',
    speed: 's',
  },
  font: 'sans-serif',
  mainFocus: {
    boxShadow: '0px 0px 10px 1px rgb(25, 163, 227, 85%)',
  },
  components: {
    Button,
    Flex,
    Input,
    TextArea,
    Text,
    Grid,
    Box,
    Heading,
    Img,
    Link,
    ListItem,
    UnorderedList,
    OrderedList,
    Chart,
    'Chart.Axis': ChartAxis,
    'Chart.Axes': ChartAxes,
    'Chart.Line': ChartLine,
    'Chart.Bars': ChartBars,
    'Chart.Title': ChartTitle,
    Modal,
    'Modal.CloseButton': CloseButton,
  },
};
