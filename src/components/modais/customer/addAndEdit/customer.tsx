import * as S from "./styles";
import Modal from "react-modal";
import { stylesModalCustomer } from "./object-style";
import { Pointer } from "@styles/utils";
import { CustomInput } from "@components/customInput/custom-input";
import { CustomButton } from "@components/customButton/button";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { DataCustomer } from "@hooks/useCustomer/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerSchema } from "@hooks/useCustomer/schema";
import CloseIcon from "@assets/icons/close-icon";
import { formatToBRL } from "@utils/format-number-input-in-BRL";

export const ModalCustomer = () => {
  const {
    isEdit,
    modalCreateOrEdit,
    dataCustomer,
    setModalCreateOrEdit,
    createCustomer,
    updateCustomer,
    setIsEdit,
  } = useCustomer();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<DataCustomer>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(CustomerSchema),
  });
  const teste = async (data) => {
    if (isEdit) {
      await createCustomer(data);
    } else {
      await updateCustomer(data);
    }
  };

  useEffect(() => {
    if (isEdit && dataCustomer) {
      setValue("name", dataCustomer.name);
      setValue("salary", dataCustomer.salary);
      setValue("companyValuation", dataCustomer.companyValuation);
    } else {
      setValue("name", "");
      setValue("salary", null);
      setValue("companyValuation", null);
    }
  }, [isEdit, dataCustomer, setValue]);

  return (
    <>
      <Modal
        isOpen={modalCreateOrEdit}
        onRequestClose={() => {
          setModalCreateOrEdit(false);
          setIsEdit(false);
        }}
        style={stylesModalCustomer}
      >
        <S.ModalHeader>
          <S.Title>{isEdit ? "Editar cliente" : "Criar cliente"}</S.Title>
          <Pointer
            onClick={() => {
              setModalCreateOrEdit(false);
              setIsEdit(false);
            }}
          >
            <CloseIcon />
          </Pointer>
        </S.ModalHeader>
        <S.ModalContent onSubmit={handleSubmit(teste)}>
          <CustomInput
            {...register("name")}
            height="base"
            borderRadius="small"
            placeholder="Digite o nome:"
            transparent
            borderWidht="base"
            error={errors.name?.message}
          />

          <Controller
            name="salary"
            control={control}
            render={({ field }) => (
              <CustomInput
                height="base"
                borderRadius="small"
                placeholder="Digite o salário:"
                transparent
                borderWidht="base"
                value={field.value ? formatToBRL(field.value) : ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^\d]/g, "");
                  field.onChange(value);
                }}
                error={errors.salary?.message}
              />
            )}
          />

          {/* <CustomInput
            height="base"
            borderRadius="small"
            placeholder="Digite o valor da empresa:"
            transparent
            borderWidht="base"
            {...(register("companyValuation"),
            {
              value: formatToBRL(""),
            })}
            error={errors.companyValuation?.message}
          /> */}

          <Controller
            name="companyValuation"
            control={control}
            render={({ field }) => (
              <CustomInput
                height="base"
                borderRadius="small"
                placeholder="Digite o valor da empresa:"
                transparent
                borderWidht="base"
                value={field.value ? formatToBRL(field.value) : ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^\d]/g, "");
                  field.onChange(value);
                }}
                error={errors.companyValuation?.message}
              />
            )}
          />

          <CustomButton
            height="base"
            variant="outlined"
            borderRadius="small"
            type="submit"
          >
            {isEdit ? "Salvar alterações" : "Criar cliente"}
          </CustomButton>
        </S.ModalContent>
      </Modal>
    </>
  );
};
