import MenuIcon from "@assets/icons/menu-icon";
import * as S from "./styles";
import LogoIcon from "@assets/icons/logo-icon";
import { Pointer } from "@styles/utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UseMenu } from "@hooks/useMenu/useMenu";

export const Header = () => {
  const { userName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { setMenuIsOpen } = UseMenu();

  return (
    <S.HeaderContainer>
      <S.Wapper>
        <S.DrawerSection>
          <Pointer onClick={() => setMenuIsOpen(true)}>
            <MenuIcon />
          </Pointer>
          <div>
            <LogoIcon />
          </div>
        </S.DrawerSection>

        <S.MenuSection>
          <Pointer onClick={() => navigate(`/home/${userName}/clientes`)}>
            <S.Text select={location.pathname.includes("clientes")}>
              Clientes
            </S.Text>
          </Pointer>
          <Pointer onClick={() => navigate(`/home/${userName}/Selecionado`)}>
            <S.Text select={location.pathname.includes("Selecionado")}>
              Clientes selecionados
            </S.Text>
          </Pointer>
          <Pointer onClick={() => navigate("/")}>
            <S.Text>Sair</S.Text>
          </Pointer>
        </S.MenuSection>

        <S.ClientInfoSection>
          <S.TextClient>
            Olá, <S.TextClient bold>{userName}!</S.TextClient>
          </S.TextClient>
        </S.ClientInfoSection>
      </S.Wapper>
    </S.HeaderContainer>
  );
};
