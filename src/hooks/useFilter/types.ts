export interface UseFilterProps {
  value: number;
  setValue: (value: number) => void;

  handleFilter: (value: number) => Promise<void>;
}
