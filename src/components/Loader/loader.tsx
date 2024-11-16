import { CircularProgress } from "@mui/material";
import { DesignSystem } from "@styles/design-system";

type LoaderProps = {
  size?: number;
  color?: "white" | "primary";
};

export const Loader = ({ size, color }: LoaderProps) => {
  return (
    <CircularProgress
      sx={{
        color:
          color == "white"
            ? DesignSystem.color.white
            : DesignSystem.color.primary,
      }}
      size={size ?? 20}
    />
  );
};
