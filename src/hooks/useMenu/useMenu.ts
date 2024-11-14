import { create } from "zustand";
import { UseMenuProps } from "./types";

export const UseMenu = create<UseMenuProps>((set) => ({
  menuIsOpen: false,
  setMenuIsOpen: (value) => set({ menuIsOpen: value }),

  selectedIndex: 1,
  setSelectedIndex: (value) => set({ selectedIndex: value }),
  handleItemClick: (index) => {
    const { setSelectedIndex } = UseMenu.getState();

    setSelectedIndex(index);
    localStorage.setItem("selectedIndex", index.toString());
  },
}));
