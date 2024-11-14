import { DesignSystem } from "@styles/design-system";
import * as React from "react";

interface ProductIconProps {
  color?: "primary" | "default";
}

const ProductIcon = ({ color }: ProductIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      fill={color == "primary" ? DesignSystem.color.primary : "#0F0F0F"}
      d="M17.333 6.017V2.234c0-1.175-.533-1.65-1.858-1.65h-3.367c-1.325 0-1.858.475-1.858 1.65v3.775c0 1.183.533 1.65 1.858 1.65h3.367c1.325.008 1.858-.467 1.858-1.642M17.333 15.392v-3.366c0-1.325-.533-1.859-1.858-1.859h-3.367c-1.325 0-1.858.534-1.858 1.859v3.366c0 1.325.533 1.859 1.858 1.859h3.367c1.325 0 1.858-.534 1.858-1.859M7.75 6.017V2.234c0-1.175-.533-1.65-1.858-1.65H2.525C1.2.584.667 1.059.667 2.234v3.775c0 1.183.533 1.65 1.858 1.65h3.367c1.325.008 1.858-.467 1.858-1.642M7.75 15.392v-3.366c0-1.325-.533-1.859-1.858-1.859H2.525c-1.325 0-1.858.534-1.858 1.859v3.366c0 1.325.533 1.859 1.858 1.859h3.367c1.325 0 1.858-.534 1.858-1.859"
    ></path>
  </svg>
);

export default ProductIcon;
