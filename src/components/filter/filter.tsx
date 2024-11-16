import { useFilter } from "@hooks/useFilter/useFilter";
import * as S from "./styles";
import { MenuItem, Select } from "@mui/material";

export const Filter = () => {
  const { value, handleFilter } = useFilter();
  return (
    <S.CustomFormControl fullWidth>
      <Select
        value={value}
        onChange={(e) => handleFilter(Number(e.target.value))}
      >
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
    </S.CustomFormControl>
  );
};
