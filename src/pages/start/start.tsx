import { CustomButton } from "@components/customButton/button";
import { CustomInput } from "@components/customInput/custom-input";
import * as S from "@pages/start/styles";

export const Start = () => {
  return (
    <S.Container>
      <S.Wapper>
        <S.Title>Olá, seja bem-vindo!</S.Title>
        <S.Form>
          <CustomInput
            borderRadius="small"
            height="large"
            placeholder="Digite seu e-mail"
          />
          <CustomButton borderRadius="small" variant="filled" height="large">
            <S.TitleButton>Entrar</S.TitleButton>
          </CustomButton>
        </S.Form>
      </S.Wapper>
    </S.Container>
  );
};
