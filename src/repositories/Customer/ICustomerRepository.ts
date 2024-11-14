import { CreateCustomerDto } from "@dtos/customer/craeateCustomerDto";

export interface ICustomerRepository {
  create(customer: CreateCustomerDto): Promise<void>;
  update(customer: CreateCustomerDto): Promise<void>;
  delete(id: string): Promise<void>;
  list(): Promise<void>;
  findById(id: string): Promise<void>;
}
