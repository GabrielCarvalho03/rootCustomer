export interface DesingSystem {
  color: {
    primary: string;
    black: string;
    white: string;
    grayLight: {
      100: string;
      200: string;
      500: string;
    };
    danger: string;
    base: string;
  };
  borderRadius: {
    small: string;
  };
  borderWidht: {
    small: string;
    base: string;
  };

  typography: {
    fonts: {
      default: string;
      secondary: string;
    };
    size: {
      small: string;
      base: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    weight: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    lineHeigth: {
      xsmall: string;
      small: string;
      base: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
  };
  input: {
    height: {
      small: string;
      base: string;
      large: string;
    };
  };

  media: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
