import { useContext } from 'react';
import { ctx } from '../ctx/providerContext';

export const useTheme = () => {
  return useContext(ctx);
};
