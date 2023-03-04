import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [index: string]: string;
    };
    spaces: {
      [index: string]: string;
    };
    borders: {
      [index: string]: string;
    };
    fonts: {
      [index: string]: string;
    };
  }
}
