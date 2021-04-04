# BuitUI

BuitUI is a react library that provides multiple UI components ultra-customizables.

## Getting Started

1.- Wrap your app in the BuitProvider with your custom theme:
```tsx
import { BuitProvider, extendTheme, theme } from 'buit-ui';

const yourTheme = extendTheme(theme, {
  colors: {
    primary: '#123456',
  },
  font: 'Arial',
  components: {
    Input: {
      base: {
        bgColor: 'white',
      },
    },
  },
});

interface YourAppProps {}

const YourApp: React.FC<YourAppProps> = (props) => {
  return (
    <BuitProvider theme={yourTheme}>
      <YourComponent />
    </BuitProvider>
  );
};
```
