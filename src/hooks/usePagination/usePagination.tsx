import { create } from "zustand";
import { usePaginationProps } from "./types";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { useFilter } from "@hooks/useFilter/useFilter";

export const usePagination = create<usePaginationProps>((set) => ({
  actualPage: 1,
  setPage: (value) => set({ actualPage: value }),

  handlePageChange: async (page) => {
    try {
      const { setPage } = usePagination.getState();
      const { value } = useFilter.getState();
      const { listAllCustomer } = useCustomer.getState();
      setPage(page);

      await listAllCustomer({ page: page, limit: value });
    } catch (error) {
      console.error("Erro ao trocar de pagina:", error);
    }
  },
}));
