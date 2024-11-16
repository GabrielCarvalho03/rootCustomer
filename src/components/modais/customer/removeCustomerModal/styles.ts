import { DesignSystem } from "@styles/design-system";
import styled from "styled-components";

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ModalContent = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const WapperButton = styled.div`
  @media (${DesignSystem.media.mobile}) {
    width: 90%;
    display: flex;
    padding-left: 40px;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-size: ${DesignSystem.typography.size.base};
  font-weight: ${DesignSystem.typography.weight.bold};
  line-height: ${DesignSystem.typography.lineHeigth.medium};
`;

export const TextButton = styled.span`
  font-size: ${DesignSystem.typography.size.small};
  font-weight: ${DesignSystem.typography.weight.bold};
  line-height: ${DesignSystem.typography.lineHeigth.base};
`;

export const Text = styled.span`
  font-size: ${DesignSystem.typography.size.base};
  font-weight: ${DesignSystem.typography.weight.regular};
  line-height: ${DesignSystem.typography.lineHeigth.base};
`;
