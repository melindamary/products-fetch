import { Product } from "./product.interface";

export interface CategorizedProducts {
  category: string;
  products: Product[];
}