import { HomeLayout } from "@components/layout/layout";
import { Customer } from "@pages/customer/customer";
import { Home } from "@pages/home/home";
import { Start } from "@pages/start/start";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/home/:userName",
    element: <HomeLayout />,
    children: [
      {
        path: "clientes",
        element: <Home />,
      },
      {
        path: "Selecionado",
        element: <Customer />,
      },
    ],
  },
]);
