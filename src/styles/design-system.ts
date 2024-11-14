import { DesingSystem } from "../@types/design-system";

export const DesignSystem: DesingSystem = {
  color: {
    base: "#F5F5F5",
    black: "#000",
    white: "#fff",
    primary: "#EC6724",
    grayLight: {
      100: "#AAAAAA",
      200: "#D9D9D900",
      500: "#363636",
    },
    danger: "#ff0000",
  },
  borderRadius: {
    small: "4px",
  },
  borderWidht: {
    small: "1px",
    base: "2px",
  },

  typography: {
    fonts: {
      default: "Inter, sans-serif",
      secondary: "Geologica Cursive, sans-serif",
    },

    size: {
      small: "14px",
      base: "16px",
      medium: "18px",
      large: "24px",
      extraLarge: "36px",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeigth: {
      xsmall: "16px",
      small: "16.36px",
      base: "16.94px",
      medium: "19.05px",
      large: "29.05px",
      extraLarge: "43.57px",
    },
  },
  input: {
    height: {
      small: "30px",
      base: "40px",
      large: "60px",
    },
  },

  media: {
    mobile: "(max-width: 768px)",
    tablet: "(max-width: 1024px)",
    desktop: "(max-width: 1281px)",
  },
};
