import * as S from "./styles";

type customButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
}: customButtonProps) => {
  return (
    <>
      <S.CustomButton
        variant={variant}
        height={height}
        borderRadius={borderRadius}
      >
        {children}
      </S.CustomButton>
    </>
  );
};
