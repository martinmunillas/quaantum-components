import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ctx } from '../../../utils/ctx/providerContext';

interface FontProviderProps {}

const FontStyle = createGlobalStyle<{ font: string }>`
    * {
        font-family: ${(props) => props.font};
    }
`;

const FontProvider: React.FC<FontProviderProps> = ({}) => {
  const context = useContext(ctx);

  if (!context.font) return null;
  return <FontStyle font={context.font} />;
};

export default FontProvider;
