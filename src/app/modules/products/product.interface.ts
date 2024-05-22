type Inventory = {
  quantity: number;
  inStock: boolean;
};
type Variant = {
  type: string;
  value: string;
};
export type Tproducts = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};
