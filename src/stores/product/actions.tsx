import { CartProduct } from "@/models/CartProduct";
import {
  _addToCart,
  _decrementProductQuantity,
  _fetchProducts,
  _incrementProductQuantity,
  _setBrandList,
  _setCart,
  _setCartProductsCount,
  _setCartTotalPrice,
  _setFilterOptions,
  _setisCartSheetOpen,
  _setIsFilterSheetOpen,
  _setModelList,
} from ".";
import store from "../index";
import { FilterOptions } from "@/models/FilterOptions";

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

export const clearCart = () => {
  store.dispatch(_setCart([]));
  store.dispatch(_setCartTotalPrice(0));
  store.dispatch(_setCartProductsCount(0));
};

export const checkout = () => {
  clearCart();
  //toast.success("Checkout successful");
};

export const setisCartSheetOpen = (isOpen: boolean) => {
  store.dispatch(_setisCartSheetOpen(isOpen));
};

export const setIsFilterSheetOpen = (isOpen: boolean) => {
  console.log(isOpen, "isOpen");
  store.dispatch(_setIsFilterSheetOpen(isOpen));
};

export const setFilterOptions = (options: FilterOptions) => {
  store.dispatch(_setFilterOptions(options));
};

export const setBrandList = (brands: string[]) => {
  store.dispatch(_setBrandList(brands));
};

export const setModelList = (models: string[]) => {
  store.dispatch(_setModelList(models));
};
