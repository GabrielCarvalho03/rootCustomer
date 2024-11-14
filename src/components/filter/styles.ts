import { FormControl, Select } from "@mui/material";
import styled from "styled-components";

export const CustomSelect = styled(Select)`
  .MuiSelect-select {
    font-size: 10px;
  }
`;

export const CustomFormControl = styled(FormControl)`
  .MuiInputBase-root {
    width: 60px;
    height: 25px;
    font-size: 10px;
  }
`;
