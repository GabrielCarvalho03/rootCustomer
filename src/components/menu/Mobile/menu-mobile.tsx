import LogoIcon from "@assets/icons/logo-icon";
import * as S from "../styles";
import { ListItem } from "../listItem";
import { useEffect, useState } from "react";
import { UseMenu } from "@hooks/useMenu/useMenu";
import IconCloseMenu from "@assets/icons/icon-close-menu";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CustomerIcon from "@assets/icons/customer-icon";
import { useNavigate, useParams } from "react-router-dom";

export const MenuMobile = () => {
  const navigate = useNavigate();
  const { userName } = useParams();

  const [optionClients, setOptionClients] = useState(false);
  const [clientSelected, setClientSelected] = useState(2);
  const {
    menuIsOpen,
    selectedIndex,
    setMenuIsOpen,
    setSelectedIndex,
    handleItemClick,
  } = UseMenu();
  useEffect(() => {
    const savedIndex = localStorage.getItem("selectedIndex");
    if (savedIndex !== null) {
      setSelectedIndex(Number(savedIndex));
    }
  }, []);

  return (
    <S.Container>
      <S.BoxCloseMenu
        menuIsOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      >
        <IconCloseMenu />
      </S.BoxCloseMenu>
      <S.CustomDrawer
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
        sx={{ zIndex: 1 }}
      >
        <S.HeaderMenu>
          <LogoIcon />
        </S.HeaderMenu>

        <S.ContentMenu>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {ListItem.map((item, index) => (
              <>
                {item.title !== "Clientes" && (
                  <ListItemButton
                    onClick={() => {
                      handleItemClick(index);
                      setOptionClients(false);
                      setClientSelected(2);
                    }}
                  >
                    <ListItemIcon>
                      <item.icon color={index == selectedIndex && "primary"} />
                    </ListItemIcon>
                    <S.TextMenuItem
                      color={index == selectedIndex ? "primary" : "default"}
                    >
                      {item.title}
                    </S.TextMenuItem>
                  </ListItemButton>
                )}
                {item.title === "Clientes" && (
                  <>
                    <ListItemButton
                      onClick={() => {
                        setOptionClients(!optionClients);
                        handleItemClick(index);
                      }}
                    >
                      <ListItemIcon>
                        <CustomerIcon />
                      </ListItemIcon>
                      <S.TextMenuItem>Clientes</S.TextMenuItem>
                      {optionClients ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse
                      sx={{ mt: -3 }}
                      in={optionClients}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItemButton
                          onClick={() => {
                            setClientSelected(0);
                            navigate(`/home/${userName}/clientes`);
                          }}
                          sx={{ pl: 4, height: 50 }}
                        >
                          <S.TextMenuItem
                            color={
                              clientSelected == 0 && optionClients
                                ? "primary"
                                : "default"
                            }
                          >
                            Clientes cadastrados
                          </S.TextMenuItem>
                        </ListItemButton>

                        <ListItemButton
                          onClick={() => {
                            setClientSelected(1);
                            navigate(`/home/${userName}/Selecionado`);
                          }}
                          sx={{ pl: 4, height: 50 }}
                        >
                          <S.TextMenuItem
                            color={
                              clientSelected == 1 && optionClients
                                ? "primary"
                                : "default"
                            }
                          >
                            Clientes selecionados
                          </S.TextMenuItem>
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </>
                )}
              </>
            ))}
          </List>
        </S.ContentMenu>
      </S.CustomDrawer>
    </S.Container>
  );
};
