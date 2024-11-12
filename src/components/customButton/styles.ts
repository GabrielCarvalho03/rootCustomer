import styled, { css } from "styled-components";
import { DesignSystem } from "@styles/design-system";

type CustomInputStylesProps = {
  height: "small" | "base" | "large";
  borderRadius?: "small";
  variant: "filled" | "outlined";
};

export const CustomButton = styled.button<CustomInputStylesProps>`
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: ${({ height }) => DesignSystem.input.height[height]};
  line-height: ${DesignSystem.typography.lineHeigth.large};
  border-width: ${DesignSystem.borderWidht.small};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? DesignSystem.borderRadius[borderRadius] : "0"};
  color: ${({ variant }) =>
    variant === "filled"
      ? DesignSystem.color.white
      : DesignSystem.color.primary};
  background-color: ${({ variant }) =>
    variant === "filled" ? DesignSystem.color.primary : "transparent"};

  &::placeholder {
    color: ${DesignSystem.color.grayLight};
  }

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: solid 1px ${DesignSystem.color.primary};
    `}
`;
