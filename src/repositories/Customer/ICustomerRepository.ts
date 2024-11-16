import { CreateCustomerDto } from "@dtos/customer/craeateCustomerDto";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { listCustomerProps } from "@hooks/useCustomer/types";

export type CustomerProps = {
  clients: CustomerDto[];
  totalPages: number;
  currentPage: number;
};

export interface ICustomerRepository {
  create(customer: CreateCustomerDto): Promise<void>;
  update(customer: CreateCustomerDto, id: number): Promise<void>;
  delete(id: number): Promise<void>;
  list(data: listCustomerProps): Promise<CustomerProps>;
  findById(id: string): Promise<void>;
}
