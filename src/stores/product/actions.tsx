import { CartProduct } from "@/models/CartProduct";
import {
  _addToCart,
  _decrementProductQuantity,
  _fetchProducts,
  _incrementProductQuantity,
  _setCart,
  _setCartProductsCount,
  _setCartTotalPrice,
} from ".";
import store from "../index";

export const fetchProducts = () => {
  store.dispatch(_fetchProducts());
};

export const addToCart = (id: string) => {
  store.dispatch(_addToCart(id));
};

export const setCart = (cart: CartProduct[]) => {
  store.dispatch(_setCart(cart));
};

export const setCartTotalPrice = (price: number) => {
  store.dispatch(_setCartTotalPrice(price));
};

export const setCartProductsCount = (count: number) => {
  store.dispatch(_setCartProductsCount(count));
};

export const incrementProductQuantity = (id: string) => {
  store.dispatch(_incrementProductQuantity(id));
};

export const decrementProductQuantity = (id: string) => {
  store.dispatch(_decrementProductQuantity(id));
};
