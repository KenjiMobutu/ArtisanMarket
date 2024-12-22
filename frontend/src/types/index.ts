export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  artisanId: string;
  category: string;
  region: string;
  createdAt: Date;
}

export interface Artisan {
  id: string;
  name: string;
  description: string;
  region: string;
  rating: number;
  imageUrl: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}