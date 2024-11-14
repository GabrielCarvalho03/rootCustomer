import { api } from "@api/index";
import { Card } from "@components/card/card";
import { useEffect } from "react";
import * as S from "./styles";
import { CustomButton } from "@components/customButton/button";

import { TextStrong } from "@styles/utils";
import { ModalCustomer } from "@components/modais/customer/addAndEdit/customer";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { client } from "@api/db.client";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { RemoveCustomerModal } from "@components/modais/customer/removeCustomerModal/removeCustomerModa";

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
            <S.Filter>
              <S.FilterIcon />
              <S.FilterText> Filtrar</S.FilterText>
            </S.Filter>
          </S.BoxLenghtAndFilter>
          <S.CardWapper>
            {client.map((item: CustomerDto) => (
              <Card item={item} />
            ))}
          </S.CardWapper>

          <div
            onClick={() => {
              setModalCreateOrEdit(true);
              setIsEdit(false);
            }}
          >
            <CustomButton height="base" variant="outlined" borderRadius="small">
              <S.TitleButton> Criar cliente</S.TitleButton>
            </CustomButton>
          </div>
        </S.Wapper>
      </S.Container>
      <ModalCustomer />
      <RemoveCustomerModal />
    </>
  );
};
