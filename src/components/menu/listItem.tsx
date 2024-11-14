import CustomerIcon from "@assets/icons/customer-icon";
import HomeIcon from "@assets/icons/home-icon";
import ProductIcon from "@assets/icons/product-icon";

type ListItemProps = {
  title: string;
  icon: React.ElementType;
};

export const ListItem: ListItemProps[] = [
  {
    title: "Home",
    icon: (props) => <HomeIcon {...props} />,
  },
  {
    title: "Clientes",
    icon: (props) => <CustomerIcon {...props} />,
  },
  {
    title: "Produtos",
    icon: (props) => <ProductIcon {...props} />,
  },
];
