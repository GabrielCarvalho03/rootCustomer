import { api } from "@api/index";
import { CreateCustomerDto } from "@dtos/customer/craeateCustomerDto";
import { UpdateCustomerDto } from "@dtos/customer/updateCustomerDto";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { ICustomerRepository } from "@repositories/Customer/ICustomerRepository";

const customersDto: CustomerDto[] = [];
const customersCreate: CreateCustomerDto[] = [];
const customersUpdate: UpdateCustomerDto[] = [];

export const InMemoryCustomerRepository: ICustomerRepository = {
  async create(customer: CreateCustomerDto): Promise<void> {
    try {
      const response = await api.post("/users", customer);
      return response.data;
    } catch (error) {
      console.error("Erro ao salvar customer:", error);
    }
  },

  async update(customer: UpdateCustomerDto): Promise<void> {
    const index = customersUpdate.findIndex((item) => item.id === customer.id);
    customersUpdate[index] = customer;
  },

  async delete(id: string): Promise<void> {
    const index = customersDto.findIndex((item) => item.id === Number(id));
    customersDto.splice(index, 1);
  },

  async list(): Promise<void> {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar customers:", error);
    }
  },
  async findById(id: string): Promise<void> {},
};
