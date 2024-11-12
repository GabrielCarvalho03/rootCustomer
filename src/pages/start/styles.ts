import styled from "styled-components";
import { DesignSystem } from "@styles/design-system";

export const Container = styled.main`
  width: 100%;
  height: 100dvh;
  background-color: ${DesignSystem.color.base};
`;

export const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 32.563rem;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${DesignSystem.media.mobile}) {
    width: 90%;
  }
`;

export const Title = styled.p`
  font-size: ${DesignSystem.typography.size.extraLarge};
  font-weight: ${DesignSystem.typography.weight.regular};
  line-height: ${DesignSystem.typography.lineHeigth.large};

  @media (${DesignSystem.media.mobile}) {
    font-size: ${DesignSystem.typography.size.large};
  }
`;

export const TitleButton = styled.p`
  font-size: ${DesignSystem.typography.size.large};
  font-weight: ${DesignSystem.typography.weight.bold};
  line-height: ${DesignSystem.typography.lineHeigth.medium};

  @media (${DesignSystem.media.mobile}) {
    font-size: ${DesignSystem.typography.size.medium};
  }
`;
