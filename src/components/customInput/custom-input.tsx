import { forwardRef } from "react";
import * as S from "./styles";

type customInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  height: "small" | "base" | "large";
  borderRadius?: "small";
  lineHeigth?: "small" | "base" | "large";
};

export const CustomInput = forwardRef<HTMLInputElement, customInputProps>(
  ({ height, borderRadius, ...props }: customInputProps, ref) => {
    return (
      <>
        <S.CustomInput
          {...props}
          ref={ref}
          height={height}
          borderRadius={borderRadius}
        />
      </>
    );
  }
);
