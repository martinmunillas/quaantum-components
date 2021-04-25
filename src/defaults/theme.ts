import { QuaantumProps } from '../types';
import { global } from './global';
import { Button } from '../components/Atoms/Button/Button.defaultStyles';
import { Flex } from '../components/Atoms/Flex/Flex.defaultStyles';
import { Input } from '../components/Atoms/Input/Input.defaultStyles';
import { TextArea } from '../components/Atoms/TextArea/TextArea.defaultProps';
import { Text } from '../components/Atoms/Text/Text.defaultStyles';
import { Grid } from '../components/Atoms/Grid/Grid.defaultStyles';
import { Box } from '../components/Atoms/Box/Box.defaultStyles';
import { Heading } from '../components/Atoms/Heading/Heading.defaultStyles';
import { Image } from '../components/Atoms/Image/Image.defaultStyles';
import { Link } from '../components/Atoms/Link/Link.defaultStyles';
import { ListItem } from '../components/Atoms/ListItem/ListItem.defaultStyles';
import { UnorderedList } from '../components/Atoms/UnorderedList/UnorderedList.defaultStyles';
import { OrderedList } from '../components/Atoms/OrderedList/OrderedList.defaultStyles';

export interface ColorsCtx {
  [color: string]: string | ColorsCtx;
}

export interface VariantsCtx {
  [variant: string]: QuaantumProps;
}

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

export interface Theme {
  colors: ColorsCtx;
  font?: string;
  components: Components;
  global?: Global;
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
  components: {
    Button,
    Flex,
    Input,
    TextArea,
    Text,
    Grid,
    Box,
    Heading,
    Image,
    Link,
    ListItem,
    UnorderedList,
    OrderedList,
  },
};
