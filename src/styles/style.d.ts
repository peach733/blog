import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: { [loginBg: string]: string };
    shadow: { [defaultShadow: string]: string };
    colors: {
      // PALETTE
      [defaultColor: string]: string;
      [defaultWhite: string]: string;
      [semiBlue: string]: string;
      [strongBlue: string]: string;
      [white: string]: string;
    };
  }
}
