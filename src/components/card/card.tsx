import * as S from "./styles";
import AddIcon from "@assets/icons/add-icon";
import EditIcon from "@assets/icons/edit-icon";
import TrashIcon from "@assets/icons/trash-icon";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { formatNumberInBRL } from "@utils/format-number-in-BRL";

type CardStyleProps = {
  fontWeight?: "bold" | "normal";
  item: CustomerDto;
};

export const Card = ({ fontWeight, item }: CardStyleProps) => {
  const { setModalCreateOrEdit, setModalRemove, setIsEdit, setDataCustomer } =
    useCustomer();
  return (
    <S.CardContainer>
      <S.Text fontWeight={"bold"}>{item.name}</S.Text>
      <S.Text lineHeight={"base"} size={"small"} fontWeight={fontWeight}>
        Salário: {formatNumberInBRL(item.salary)}
      </S.Text>
      <S.Text lineHeight={"base"} size={"small"}>
        Empresa: {formatNumberInBRL(item.companyValuation)}
      </S.Text>

      <S.WapperActions>
        <S.pointer>
          <AddIcon />
        </S.pointer>

        <S.pointer
          onClick={() => {
            setModalCreateOrEdit(true);
            setIsEdit(true);
            setDataCustomer(item);
          }}
        >
          <EditIcon />
        </S.pointer>

        <S.pointer
          onClick={() => {
            setModalRemove(true);
            setDataCustomer(item);
          }}
        >
          <TrashIcon />
        </S.pointer>
      </S.WapperActions>
    </S.CardContainer>
  );
};
