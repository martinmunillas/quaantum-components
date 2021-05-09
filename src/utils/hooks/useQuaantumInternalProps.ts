import { InternalProps } from '../../types';
import { useTheme } from './useTheme';

export const useQuaantumInternalProps = (name: string): InternalProps<{}> => {
  const { components } = useTheme();

  if (!(name in components)) {
    throw new Error(
      `'${name}' component is not defined in the QuaantumUI theme, 
      either define the component in your theme or extend the quaantum one`
    );
  }
  return { componentName: name };
};
