import { Header } from "@components/header/header";
import { Menu } from "@components/menu/desktop/menu";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => (
  <>
    <Header />
    <Menu />
    <Outlet />
  </>
);
