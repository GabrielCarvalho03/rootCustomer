import styled, { css } from "styled-components";
import { DesignSystem } from "@styles/design-system";

type customInputStylesProps = {
  height: "small" | "base" | "large";
  borderRadius: "small" | undefined;
  transparent?: boolean;
  borderWidht?: "small" | "base";
};

export const CustomInput = styled.input<customInputStylesProps>`
  width: 100%;
  height: ${({ height }) => DesignSystem.input.height[height]};
  border-width: ${({ borderWidht }) =>
    DesignSystem.borderWidht[borderWidht || "small"]};
  border-color: rgba(0, 0, 0, 0.1);
  padding-left: 20px;
  outline: none;
  font-size: ${({ height }) =>
    height == "base"
      ? DesignSystem.typography.size.base
      : DesignSystem.typography.size.large};
  line-height: ${DesignSystem.typography.lineHeigth.large};
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : DesignSystem.color.base};
  font-weight: ${DesignSystem.typography.weight.light};

  border-radius: ${({ borderRadius }) =>
    borderRadius && DesignSystem.borderRadius[borderRadius]};
  &::placeholder {
    color: ${DesignSystem.color.grayLight[100]};
  }
`;

export const ErrorMessage = styled.span`
  color: ${DesignSystem.color.danger};
`;
