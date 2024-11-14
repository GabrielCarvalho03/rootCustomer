// src/utils/format-number-input-in-BRL.ts
export const formatToBRL = (value: string | number) => {
  const number =
    typeof value === "string"
      ? parseFloat(value.replace(/[^\d]/g, "")) / 100
      : value;
  if (isNaN(number)) return "";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};
