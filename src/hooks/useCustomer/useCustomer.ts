import { create } from "zustand";
import { listCustomerProps, UseCustomerProps } from "./types";
import { InMemoryCustomerRepository } from "@repositories/Customer/InMemoryCustomerRepository";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { CustomerProps } from "@repositories/Customer/ICustomerRepository";
import { useFilter } from "@hooks/useFilter/useFilter";
import { toast } from "react-toastify";
import { usePagination } from "@hooks/usePagination/usePagination";

export const useCustomer = create<UseCustomerProps>((set) => ({
  isEdit: false,
  setIsEdit: (value) => set({ isEdit: value }),

  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

  isLoadingButton: false,
  setIsLoadingButton: (value) => set({ isLoadingButton: value }),

  modalCreateOrEdit: false,
  setModalCreateOrEdit: (value: boolean) => set({ modalCreateOrEdit: value }),

  modalRemove: false,
  setModalRemove: (value: boolean) => set({ modalRemove: value }),

  dataCustomer: {} as CustomerDto,
  setDataCustomer: (value) => set({ dataCustomer: value }),

  customers: {} as CustomerProps,
  setCustomers: (value) => set({ customers: value }),

  createCustomer: async (data) => {
    const { setIsLoadingButton, setModalCreateOrEdit, listAllCustomer } =
      useCustomer.getState();
    const { value } = useFilter.getState();
    const { actualPage } = usePagination.getState();
    setIsLoadingButton(true);
    try {
      await InMemoryCustomerRepository.create(data);
      await listAllCustomer({ page: actualPage, limit: value });
      toast.success("Cliente criado  !");
      setModalCreateOrEdit(false);
    } catch (error) {
      console.error("Erro ao buscar customer:", error);
    }
    setIsLoadingButton(false);
  },
  updateCustomer: async (data, id) => {
    const { setIsLoadingButton, setModalCreateOrEdit, listAllCustomer } =
      useCustomer.getState();
    const { value } = useFilter.getState();
    const { actualPage } = usePagination.getState();
    setIsLoadingButton(true);

    try {
      await InMemoryCustomerRepository.update(data, id);
      await listAllCustomer({ page: actualPage, limit: value });
      toast.success("Cliente editado !");
      setModalCreateOrEdit(false);
    } catch (error) {
      console.error("Erro ao atualizar customer:", error);
    }
    setIsLoadingButton(false);
  },

  deleteCustomer: async (id) => {
    const { setIsLoadingButton, setModalRemove, listAllCustomer } =
      useCustomer.getState();
    const { value } = useFilter.getState();
    const { actualPage } = usePagination.getState();
    setIsLoadingButton(true);
    try {
      await InMemoryCustomerRepository.delete(id);
      await listAllCustomer({ page: actualPage, limit: value });
      toast.success("Cliente removido  !");
      setModalRemove(false);
    } catch (error) {
      console.error("Erro ao deletar customer:", error);
    }
    setIsLoadingButton(false);
  },

  listAllCustomer: async (data: listCustomerProps) => {
    const { setCustomers, setIsLoading } = useCustomer.getState();
    const { value } = useFilter.getState();
    setIsLoading(true);

    try {
      const objdata: listCustomerProps = {
        page: data.page,
        limit: data.limit,
      };
      const response = await InMemoryCustomerRepository.list(objdata);
      setCustomers(response);
    } catch (error) {
      console.error("Erro ao buscar customers:", error);
    }
    setIsLoading(false);
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
