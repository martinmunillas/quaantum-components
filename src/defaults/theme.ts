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
import { Toast } from '../components/Atoms/Toast/Toast.defaultStyles';

export interface VariantsCtx {
  [variant: string]: QuaantumProps;
}

export interface ColorCtx {
  main: string;
  light: string;
  dark: string;
}

export interface ColorsCtx {
  [color: string]: ColorCtx | string;
}

export interface ComponentCtx {
  base: QuaantumProps;
  variants: VariantsCtx;
  defaultVariant?: string;
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
   * for using just numbers in measurement properties, like width, margin, etc.
   */
  font: string;
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
}

export const theme: Theme = {
  global,
  colors: {
    black: {
      main: '#121212',
      light: '#1f1f1f',
      dark: '#000000',
    },
    white: {
      main: '#eeeeee',
      light: '#ffffff',
      dark: '#cccccc',
    },
    primary: {
      main: '#345674',
      light: '#567890',
      dark: '#123456',
    },
    secondary: {
      main: '#787123',
      light: '#999340',
      dark: '#565904',
    },
    tertiary: {
      main: '#555978',
      light: '#777b9a',
      dark: '#33375a',
    },
  },
  units: {
    measurement: 'px',
    font: 'rem',
    speed: 's',
  },
  font: 'sans-serif',
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
    Toast,
    'Chart.Axis': ChartAxis,
    'Chart.Axes': ChartAxes,
    'Chart.Line': ChartLine,
    'Chart.Bars': ChartBars,
    'Chart.Title': ChartTitle,
    Modal,
    'Modal.CloseButton': CloseButton,
  },
};
