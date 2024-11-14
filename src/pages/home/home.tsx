import { api } from "@api/index";
import { Card } from "@components/card/card";
import { useEffect } from "react";
import * as S from "./styles";
import { CustomButton } from "@components/customButton/button";

import { TextStrong } from "@styles/utils";
import { ModalCustomer } from "@components/modais/customer/addAndEdit/customer";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { clientList } from "@api/db.client";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { RemoveCustomerModal } from "@components/modais/customer/removeCustomerModal/removeCustomerModa";
import { Filter } from "@components/filter/filter";
import { Pagination } from "@mui/material";

export const Home = () => {
  const { setModalCreateOrEdit, setIsEdit } = useCustomer();

  return (
    <>
      <S.Container>
        <S.Wapper>
          <S.BoxLenghtAndFilter>
            <S.Lenght>
              <TextStrong>16</TextStrong> clientes encontrados:
            </S.Lenght>

            <S.WapperFilter>
              <S.FilterText>Clientes por página:</S.FilterText>
              <Filter />
            </S.WapperFilter>
          </S.BoxLenghtAndFilter>

          <S.CardWapper>
            {clientList.client.map((item: CustomerDto) => (
              <Card item={item} />
            ))}
          </S.CardWapper>

          <S.WapperButton
            onClick={() => {
              setModalCreateOrEdit(true);
              setIsEdit(false);
            }}
          >
            <CustomButton height="base" variant="outlined" borderRadius="small">
              <S.TitleButton> Criar cliente</S.TitleButton>
            </CustomButton>
          </S.WapperButton>
        </S.Wapper>
        <S.CustomPagination count={clientList.totalPages} shape="rounded" />
      </S.Container>
      <ModalCustomer />
      <RemoveCustomerModal />
    </>
  );
};
