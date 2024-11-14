export interface UseMenuProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (value: boolean) => void;

  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
  handleItemClick: (index: number) => void;
}
