export type Variants = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: 'In Stock' | 'Not in Stock';
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variants[];
  inventory: Inventory;
};
