import { DesignSystem } from "@styles/design-system";
import styled from "styled-components";

type HeaderStyleProps = {
  select?: boolean;
  bold?: boolean;
};

export const HeaderContainer = styled.main`
  width: 100%;
  height: 100px;
  background-color: ${DesignSystem.color.white};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`;

export const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DrawerSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (${DesignSystem.media.mobile}) {
    display: none;
  }
`;

export const ClientInfoSection = styled.div``;

export const Text = styled.span<HeaderStyleProps>`
  position: relative;
  font-weight: ${DesignSystem.typography.weight.regular};
  font-size: ${DesignSystem.typography.size.base};
  color: ${({ select }) =>
    select ? `  ${DesignSystem.color.primary}` : `${DesignSystem.color.black}`};
  line-height: ${DesignSystem.typography.lineHeigth.medium};
  text-decoration: ${({ select }) =>
    select ? ` underline ${DesignSystem.color.primary}` : "none"};
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: ${DesignSystem.color.primary};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const TextClient = styled.span<HeaderStyleProps>`
  font-weight: ${({ bold }) =>
    bold
      ? DesignSystem.typography.weight.bold
      : DesignSystem.typography.weight.regular};
  font-size: ${DesignSystem.typography.size.base};
  line-height: ${DesignSystem.typography.lineHeigth.medium};
`;
