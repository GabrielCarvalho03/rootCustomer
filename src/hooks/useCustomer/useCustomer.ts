import { create } from "zustand";
import { UseCustomerProps } from "./types";
import { InMemoryCustomerRepository } from "@repositories/Customer/InMemoryCustomerRepository";
import { CustomerDto } from "@dtos/customer/CustomerDto";

export const useCustomer = create<UseCustomerProps>((set) => ({
  isEdit: false,
  setIsEdit: (value) => set({ isEdit: value }),

  modalCreateOrEdit: false,
  setModalCreateOrEdit: (value: boolean) => set({ modalCreateOrEdit: value }),

  modalRemove: false,
  setModalRemove: (value: boolean) => set({ modalRemove: value }),

  dataCustomer: {} as CustomerDto,
  setDataCustomer: (value) => set({ dataCustomer: value }),

  customers: [],

  createCustomer: async (data) => {
    try {
      console.log("foi buscar");
      const response = await InMemoryCustomerRepository.create(data);
      console.log(response);
    } catch (error) {
      console.error("Erro ao buscar customer:", error);
    }
  },
  updateCustomer: async (data) => {
    try {
      console.log("foi buscar");
      const response = await InMemoryCustomerRepository.update(data);
      console.log(response);
    } catch (error) {
      console.error("Erro ao atualizar customer:", error);
    }
  },
  deleteCustomer: async (id) => {
    try {
      console.log("foi buscar");
      const response = await InMemoryCustomerRepository.delete(id);
      console.log(response);
    } catch (error) {
      console.error("Erro ao deletar customer:", error);
    }
  },
  listAllCustomer: async () => {
    try {
      console.log("foi buscar");
      const response = await InMemoryCustomerRepository.list();
      console.log(response);
    } catch (error) {
      console.error("Erro ao buscar customers:", error);
    }
  },

  selectedCustomers: [],
  setSelectedCustomers: (value) => set({ selectedCustomers: value }),

  addSelectedCustomer: (customer) =>
    set((state) => ({
      selectedCustomers: [...state.selectedCustomers, customer],
    })),

  removeSelectedCustomer: (customer) => {
    set((state) => ({
      selectedCustomers: state.selectedCustomers.filter(
        (item) => item.id !== customer.id
      ),
    }));
  },
}));
