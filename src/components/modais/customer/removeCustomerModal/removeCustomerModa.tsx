import * as S from "./styles";
import Modal from "react-modal";
import { stylesModalCustomer } from "./object-style";
import { Pointer, TextStrong } from "@styles/utils";
import { CustomButton } from "@components/customButton/button";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import CloseIcon from "@assets/icons/close-icon";

export const RemoveCustomerModal = () => {
  const { modalRemove, setModalRemove } = useCustomer();

  return (
    <>
      <Modal
        isOpen={modalRemove}
        onRequestClose={() => {
          setModalRemove(false);
        }}
        style={stylesModalCustomer}
      >
        <S.ModalHeader>
          <S.Title>Excluir cliente</S.Title>
          <Pointer
            onClick={() => {
              setModalRemove(false);
            }}
          >
            <CloseIcon />
          </Pointer>
        </S.ModalHeader>

        <S.ModalContent>
          <S.Text>
            Você está prestes a excluir o cliente:{" "}
            <TextStrong>Eduardo</TextStrong>
          </S.Text>

          <CustomButton
            height="base"
            variant="filled"
            borderRadius="small"
            type="submit"
          >
            Excluir cliente
          </CustomButton>
        </S.ModalContent>
      </Modal>
    </>
  );
};
