import { getColor } from '../../css/resolvers/getColor';
import { useTheme } from './useTheme';

export const useColor = () => {
  const { colors } = useTheme();
  return (color: string) => {
    return getColor(color, colors);
  };
};
