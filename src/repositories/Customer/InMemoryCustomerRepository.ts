import { api } from "@api/index";
import { CreateCustomerDto } from "@dtos/customer/craeateCustomerDto";
import { UpdateCustomerDto } from "@dtos/customer/updateCustomerDto";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { ICustomerRepository } from "@repositories/Customer/ICustomerRepository";
import { CustomerProps } from "@repositories/Customer/ICustomerRepository";
import { listCustomerProps } from "@hooks/useCustomer/types";

const customersDto: CustomerDto[] = [];
const customersCreate: CreateCustomerDto[] = [];
const customersUpdate: UpdateCustomerDto[] = [];

export const InMemoryCustomerRepository: ICustomerRepository = {
  async create(customer: CreateCustomerDto): Promise<void> {
    try {
      const response = await api.post("/users", {
        name: customer.name,
        salary: customer.salary,
        companyValuation: customer.companyValuation,
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao salvar customer:", error);
    }
  },

  async update(customer: UpdateCustomerDto, id: number): Promise<void> {
    try {
      const response = await api.patch(`/users/${id}`, {
        name: customer.name,
        salary: customer.salary,
        companyValuation: customer.companyValuation,
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao editar customer:", error);
    }
  },

  async delete(id: number): Promise<void> {
    try {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar customer:", error);
    }
  },

  async list({ limit, page }: listCustomerProps): Promise<CustomerProps> {
    try {
      const response = await api.get(`/users?_page=${page}&_limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar customers:", error);
    }
  },
  async findById(id: string): Promise<void> {},
};
