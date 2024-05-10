import { Product } from "./Product";

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartInfo {
  cartProductsCount: number;
  cartTotalPrice: number;
  cart: CartProduct[];
}
