import { useAppSelector } from "../hooks";
import { RootState } from "..";

export const useCartProductsCount = () => {
  return useAppSelector((state: RootState) => state.products.cartProductsCount);
};

export const useProducts = () => {
  return useAppSelector((state: RootState) => state.products.products);
};

export const useProductsLoading = () => {
  return useAppSelector((state: RootState) => state.products.productsLoading);
};

export const useFilterOptions = () => {
  return useAppSelector((state: RootState) => state.products.filterOptions);
};

export const useCart = () => {
  return useAppSelector((state: RootState) => state.products.cart);
};

export const useCartTotalPrice = () => {
  return useAppSelector((state: RootState) => state.products.cartTotalPrice);
};
