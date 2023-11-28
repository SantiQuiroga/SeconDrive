interface CartItem {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  brand: string;
  image: string;
  price: number;
  stock: number;
  unitSold: number;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Cart = CartItem[];
