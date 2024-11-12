import * as S from "./styles";

type customInputProps = {
  children?: React.ReactNode;
  height: "small" | "base" | "large";
  borderRadius?: "small";
  variant: "filled" | "outlined";
};

export const CustomButton = ({
  borderRadius,
  height,
  children,
  variant,
}: customInputProps) => {
  return (
    <S.CustomButton
      variant={variant}
      height={height}
      borderRadius={borderRadius}
    >
      {children}
    </S.CustomButton>
  );
};
