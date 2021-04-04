import { colorResolver } from './colors';
import { pseudoResolver } from './pseudo';
import { widthResolver } from './width';

const resolvers = {
  width: widthResolver,
  round: widthResolver,
  color: colorResolver,
  bgColor: colorResolver,
  _hover: pseudoResolver,
  _active: pseudoResolver,
  _focus: pseudoResolver,
  _placeholder: pseudoResolver,
  _before: pseudoResolver,
  _after: pseudoResolver,
};

export default resolvers;
