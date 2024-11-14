import { CreateCustomerDto } from "@dtos/customer/craeateCustomerDto";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { UpdateCustomerDto } from "@dtos/customer/updateCustomerDto";

export type DataCustomer = {
  name: string;
  salary: number;
  companyValuation: number;
};

export interface UseCustomerProps {
  isEdit: Boolean;
  setIsEdit: (value: Boolean) => void;

  modalCreateOrEdit: Boolean;
  setModalCreateOrEdit: (value: Boolean) => void;

  modalRemove: Boolean;
  setModalRemove: (value: Boolean) => void;

  dataCustomer: CustomerDto;
  setDataCustomer: (value: CustomerDto) => void;

  customers: CustomerDto[];
  listAllCustomer: () => Promise<void>;
  createCustomer: (data: CreateCustomerDto) => Promise<void>;
  updateCustomer: (data: UpdateCustomerDto) => Promise<void>;
  deleteCustomer: (id: string) => Promise<void>;

  selectedCustomers: CustomerDto[];
  setSelectedCustomers: (value: CustomerDto[]) => void;

  addSelectedCustomer: (customer: CustomerDto) => void;
  removeSelectedCustomer: (customer: CustomerDto) => void;
}
