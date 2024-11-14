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

export const Customer = () => {
  const { selectedCustomers, setSelectedCustomers } = useCustomer();

  return (
    <>
      <S.Container>
        {selectedCustomers.length >= 1 && (
          <>
            <S.Wapper>
              <S.BoxLenghtAndFilter>
                <S.Lenght>
                  <TextStrong>clientes Selecionados:</TextStrong>
                </S.Lenght>
              </S.BoxLenghtAndFilter>
              <S.CardWapper>
                {selectedCustomers?.map((item: CustomerDto) => (
                  <Card isClientSelect item={item} />
                ))}
              </S.CardWapper>
              <div
                onClick={() => {
                  setSelectedCustomers([]);
                }}
              >
                <CustomButton
                  height="base"
                  variant="outlined"
                  borderRadius="small"
                >
                  <S.TitleButton> Limpar clientes selecionados</S.TitleButton>
                </CustomButton>
              </div>
            </S.Wapper>
            <S.CustomPagination count={clientList.totalPages} shape="rounded" />
          </>
        )}

        {!selectedCustomers.length && (
          <S.NotSelected>
            <S.TextNotSelect>Nenhum cliente selecionado</S.TextNotSelect>

            <S.WapperButtonNotSelected>
              <CustomButton variant="filled" borderRadius="small" height="base">
                <S.TitleButton>Selecione um cliente para editar</S.TitleButton>
              </CustomButton>
            </S.WapperButtonNotSelected>
          </S.NotSelected>
        )}
      </S.Container>
    </>
  );
};
