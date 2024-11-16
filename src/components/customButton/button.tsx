import * as S from "./styles";

type customButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  height: "small" | "base" | "large";
  borderRadius?: "small";
  variant: "filled" | "outlined";
  type?: "button" | "submit";
};

export const CustomButton = ({
  borderRadius,
  height,
  children,
  variant,
  type = "button",
}: customButtonProps) => {
  return (
    <>
      <S.CustomButton
        type={type}
        variant={variant}
        height={height}
        borderRadius={borderRadius}
      >
        {children}
      </S.CustomButton>
    </>
  );
};
