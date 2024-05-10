import { _addToCart, _fetchProducts } from ".";
import store from "../index";

export const fetchProducts = () => {
  store.dispatch(_fetchProducts());
};

export const addToCart = (id: string) => {
  store.dispatch(_addToCart(id));
};
