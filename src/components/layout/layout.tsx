import { Header } from "@components/header/header";
import { MenuDesktop } from "@components/menu/desktop/menu-desktop";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MenuMobile } from "@components/menu/Mobile/menu-mobile";

export const HomeLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(768));

  return (
    <>
      <Header />
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
      <Outlet />
    </>
  );
};
