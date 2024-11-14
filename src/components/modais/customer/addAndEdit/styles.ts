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
  gap: 5px;
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
