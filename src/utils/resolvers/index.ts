import { colorResolver } from './colors';
import { pseudoResolver } from './pseudo';
import { widthResolver } from './width';
import { xResolver } from './xy';

const resolvers = {
  width: widthResolver,
  round: widthResolver,
  color: colorResolver,
  bgColor: colorResolver,
  marginX: xResolver('margin'),
  mx: xResolver('margin'),
  paddingX: xResolver('padding'),
  px: xResolver('padding'),
  _hover: pseudoResolver,
  _active: pseudoResolver,
  _focus: pseudoResolver,
  _placeholder: pseudoResolver,
  _before: pseudoResolver,
  _after: pseudoResolver,
};

export default resolvers;
