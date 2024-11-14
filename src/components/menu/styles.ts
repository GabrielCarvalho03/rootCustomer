import styled, { css, keyframes } from "styled-components";
import { Drawer } from "@mui/material";
import { DesignSystem } from "@styles/design-system";

type styledProps = {
  menuIsOpen?: boolean;
  select?: "primary" | "default";
};

const slideOut = keyframes`
  from {
    opacity: 0;
    transform: translateX(0);
  }
  to {
    opacity: 1;
    transform: translateX(100%);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 1;
    transform: translateX(100%);
  }
  to {
    opacity: 0;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 16.25rem;
  z-index: 9999;
`;

export const CustomDrawer = styled(Drawer)`
  .MuiDrawer-modal {
    z-index: 1 !important;
  }

  .MuiDrawer-paper {
    width: 16.25rem;
    border-top-right-radius: 10px;
  }
`;

export const HeaderMenu = styled.div`
  width: 100%;

  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${DesignSystem.color.grayLight[500]};
`;

export const ContentMenu = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${DesignSystem.color.white};
  padding: 2rem 0 0 1rem;
`;

export const WapperMenuItem = styled.div<styledProps>`
  width: 100%;
  height: 40px;
  display: flex;
  border-right: ${({ select }) =>
    select === "primary" ? `2px solid ${DesignSystem.color.primary}` : "none"};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const BoxText = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextMenuItem = styled.p`
  padding-top: 2px;
  color: ${({ color }) =>
    color === "primary"
      ? DesignSystem.color.primary
      : DesignSystem.color.black};
  font-family: ${DesignSystem.typography.fonts.secondary};
  font-size: ${DesignSystem.typography.size.medium};
  font-weight: ${DesignSystem.typography.weight.regular};
  line-height: ${DesignSystem.typography.lineHeigth.base};
  text-align: left;
`;

export const BoxCloseMenu = styled.div<styledProps>`
  position: absolute;
  top: -1rem;
  right: 1.8rem;
  width: 100%;
  height: 100%;
  ${({ menuIsOpen }) =>
    menuIsOpen
      ? css`
          animation: ${slideOut} 0.2s forwards;
        `
      : css`
          animation: ${slideIn} 0.2s forwards;
        `}
`;
