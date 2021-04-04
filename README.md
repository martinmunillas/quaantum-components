# QuaantumUI

QuaantumUI is a react library that provides multiple UI components ultra-customizables.

## Getting Started

1.- Wrap your app in the QuaantumProvider with your custom theme:
```tsx
import { QuaantumProvider, extendTheme, theme } from 'quaantum-ui;

const yourTheme = extendTheme(theme, {
  colors: {
    primary: '#123456'
  },
  font: 'Arial',
  components: {
    Input: {
      base: {
        bgColor: 'white', 
      }
    }
  }
})

interface YourAppProps {}

const YourApp: React.FC<YourAppProps> = (props) => {
  return  (
    <QuaantumProvider theme={yourTheme}>
      <YourComponent />
    </QuaantumProvider>
  
  )
};

```
