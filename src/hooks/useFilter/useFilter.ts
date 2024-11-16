import { create } from "zustand";
import { UseFilterProps } from "./types";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { usePagination } from "@hooks/usePagination/usePagination";

export const useFilter = create<UseFilterProps>((set) => ({
  value: 16,
  setValue: (value: number) => set({ value }),

  handleFilter: async (actualValue: number) => {
    const { setValue } = useFilter.getState();
    const { listAllCustomer } = useCustomer.getState();
    const { actualPage } = usePagination.getState();

    setValue(actualValue);
    try {
      await listAllCustomer({ page: actualPage, limit: actualValue });
    } catch (error) {
      console.log("erro ao filtrar", error);
    }
  },
}));
