import { CreateCustomerDto } from "@dtos/customer/craeateCustomerDto";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { UpdateCustomerDto } from "@dtos/customer/updateCustomerDto";
import { CustomerProps } from "@repositories/Customer/ICustomerRepository";

export type DataCustomer = {
  name: string;
  salary: number;
  companyValuation: number;
};

export type listCustomerProps = {
  page?: number;
  limit?: number;
};

export interface UseCustomerProps {
  isEdit: Boolean;
  setIsEdit: (value: Boolean) => void;

  isLoading: Boolean;
  setIsLoading: (value: Boolean) => void;

  isLoadingButton: Boolean;
  setIsLoadingButton: (value: Boolean) => void;

  modalCreateOrEdit: Boolean;
  setModalCreateOrEdit: (value: Boolean) => void;

  modalRemove: Boolean;
  setModalRemove: (value: Boolean) => void;

  dataCustomer: CustomerDto;
  setDataCustomer: (value: CustomerDto) => void;

  customers: CustomerProps;
  setCustomers: (value: CustomerProps) => void;

  listAllCustomer: (data: listCustomerProps) => Promise<void>;
  createCustomer: (data: CreateCustomerDto) => Promise<void>;
  updateCustomer: (data: UpdateCustomerDto, id: number) => Promise<void>;
  deleteCustomer: (id: number) => Promise<void>;

  selectedCustomers: CustomerDto[];
  setSelectedCustomers: (value: CustomerDto[]) => void;

  addSelectedCustomer: (customer: CustomerDto) => void;
  removeSelectedCustomer: (customer: CustomerDto) => void;
}
