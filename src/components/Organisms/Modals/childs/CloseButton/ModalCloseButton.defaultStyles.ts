import { Button } from '../../../../Atoms/Button/Button.defaultStyles';

const defaultVariant = 'unstyled';

export const CloseButton = {
  ...Button,
  base: {
    ...Button.base,
    position: 'absolute',
  },
  defaultVariant,
};
