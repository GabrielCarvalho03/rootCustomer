import { create } from "zustand";
import { UseCustomerProps } from "./types";

export const useUser = create<UseCustomerProps>((set) => ({
  isEdit: false,
  setIsEdit: (value) => set({ isEdit: value }),

  modalCreateOrEdit: false,
  setModalCreateOrEdit: (value) => set({ modalCreateOrEdit: value }),
}));
