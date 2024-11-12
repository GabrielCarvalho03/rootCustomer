import styled, { css } from "styled-components";
import { DesignSystem } from "@styles/design-system";

type customInputStylesProps = {
  height: "small" | "base" | "large";
  borderRadius: "small" | undefined;
};

export const CustomInput = styled.input<customInputStylesProps>`
  width: 100%;
  height: ${({ height }) => DesignSystem.input.height[height]};
  border-width: ${DesignSystem.borderWidht.small};
  border-color: rgba(0, 0, 0, 0.1);
  padding-left: 20px;
  outline: none;
  font-size: ${DesignSystem.typography.size.large};
  line-height: ${DesignSystem.typography.lineHeigth.large};
  background-color: ${DesignSystem.color.base};
  font-weight: ${DesignSystem.typography.weight.light};

  border-radius: ${({ borderRadius }) =>
    borderRadius && DesignSystem.borderRadius[borderRadius]};
  &::placeholder {
    color: ${DesignSystem.color.grayLight[100]};
  }
`;
