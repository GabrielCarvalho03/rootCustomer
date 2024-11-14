import LogoIcon from "@assets/icons/logo-icon";
import * as S from "./styles";
import HomeIcon from "@assets/icons/home-icon";
import { ListItem } from "./listItem";
import { Pointer } from "@styles/utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UseMenu } from "@hooks/useMenu/useMenu";
import IconCloseMenu from "@assets/icons/icon-close-menu";

export const Menu = () => {
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
          {ListItem.map((item, index) => (
            <S.WapperMenuItem
              onClick={() => handleItemClick(index)}
              key={index}
            >
              <item.icon color={index == selectedIndex && "primary"} />
              <S.BoxText>
                <S.TextMenuItem
                  color={index == selectedIndex ? "primary" : "default"}
                >
                  {item.title}
                </S.TextMenuItem>
              </S.BoxText>
            </S.WapperMenuItem>
          ))}
        </S.ContentMenu>
      </S.CustomDrawer>
    </S.Container>
  );
};
