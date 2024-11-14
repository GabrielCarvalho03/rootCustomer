import { HomeLayout } from "@components/layout/layout";
import { Home } from "@pages/home/home";
import { Start } from "@pages/start/start";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
        element: <Home />,
      },
    ],
  },
]);
