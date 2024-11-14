import { forwardRef } from "react";
import * as S from "./styles";

type customInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  height: "small" | "base" | "large";
  borderRadius?: "small";
  lineHeigth?: "small" | "base" | "large";
  error?: string;
  transparent?: boolean;
  borderWidht?: "small" | "base";
};

export const CustomInput = forwardRef<HTMLInputElement, customInputProps>(
  (
    {
      height,
      borderRadius,
      error,
      transparent,
      borderWidht,
      ...props
    }: customInputProps,
    ref
  ) => {
    return (
      <>
        <S.CustomInput
          {...props}
          ref={ref}
          height={height}
          borderRadius={borderRadius}
          transparent={transparent}
          borderWidht={borderWidht}
        />
        <S.ErrorMessage>{error}</S.ErrorMessage>
      </>
    );
  }
);
