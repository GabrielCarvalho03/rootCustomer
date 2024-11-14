import { CustomerDto } from "@dtos/customer/CustomerDto";

type clientProps = {
  client: CustomerDto[];
  totalPages: number;
  currentPage: number;
};

export const clientList: clientProps = {
  client: [
    {
      id: 13,
      name: "T",
      salary: 2.256,
      companyValuation: 2,
    },
    {
      id: 17,
      name: "Tte",
      salary: 250800,
      companyValuation: 8580,
    },
    {
      id: 19,
      name: "T",
      salary: 2803.86,
      companyValuation: 1500.58,
    },
    {
      id: 25,
      name: "re2",
      salary: 0,
      companyValuation: 0,
    },
    {
      id: 26,
      name: "Renata",
      salary: 36858,
      companyValuation: 325899,
    },
    {
      id: 30,
      name: "Cliente teste",
      salary: 1,
      companyValuation: 2,
    },
    {
      id: 33,
      name: "swagger11",
      salary: 4,
      companyValuation: 4043,
    },
    {
      id: 34,
      name: "olá",
      salary: 3424,
      companyValuation: 342432423,
    },
    {
      id: 38,
      name: "teste 2",
      salary: 0,
      companyValuation: 250000,
    },
    {
      id: 40,
      name: "teste 4 att",
      salary: 5699,
      companyValuation: 500000,
    },
  ],
  currentPage: 1,
  totalPages: 2,
};
