import { _fetchProducts } from ".";
import store from "../index";

export const fetchProducts = () => {
  store.dispatch(_fetchProducts());
};
