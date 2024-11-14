import { Pagination } from "@mui/material";
import { DesignSystem } from "@styles/design-system";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;

  @media (${DesignSystem.media.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardWapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap: 30px;

  @media (${DesignSystem.media.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (${DesignSystem.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (${DesignSystem.media.mobile}) {
    padding-left: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TitleButton = styled.p`
  font-size: ${DesignSystem.typography.size.small};
  font-weight: ${DesignSystem.typography.weight.bold};
  line-height: ${DesignSystem.typography.lineHeigth.medium};
  padding: 0 1rem;
  @media (${DesignSystem.media.mobile}) {
    font-size: ${DesignSystem.typography.size.medium};
  }
`;

export const BoxLenghtAndFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  @media (${DesignSystem.media.mobile}) {
    width: 90%;
    padding-left: 40px;
    flex-direction: column;
  }
`;

export const Lenght = styled.p`
  font-size: ${DesignSystem.typography.size.medium};
  font-weight: ${DesignSystem.typography.weight.regular};
  line-height: ${DesignSystem.typography.lineHeigth.large};
  color: ${DesignSystem.color.black};
`;

export const WapperFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const FilterText = styled.p`
  width: 100%;
  font-size: ${DesignSystem.typography.size.medium};
  font-weight: ${DesignSystem.typography.weight.regular};
  line-height: ${DesignSystem.typography.lineHeigth.large};
  color: ${DesignSystem.color.black};
  white-space: nowrap;
`;

export const CustomPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: inherit;
    font-weight: ${DesignSystem.typography.weight.bold};
  }
  .MuiPaginationItem-root.Mui-selected {
    background-color: ${DesignSystem.color.primary};
    color: ${DesignSystem.color.white} !important;
  }

  .MuiPaginationItem-icon {
    display: none;
  }
`;

export const NotSelected = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WapperButtonNotSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TextNotSelect = styled.p`
  font-size: ${DesignSystem.typography.size.medium};
  font-weight: ${DesignSystem.typography.weight.regular};
  line-height: ${DesignSystem.typography.lineHeigth.large};
  color: ${DesignSystem.color.black};
  padding: 0 1rem;
`;
