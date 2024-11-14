import { create } from "zustand";
import { UseFilterProps } from "./types";

export const useFilter = create<UseFilterProps>((set) => ({
  value: 16,
  setValue: (value: number) => set({ value }),

  handleFilter: (value: number) => {
    set({ value });
  },
}));
