import { useAppSelector } from "../hooks";
import { RootState } from "..";

export const useCartProductsCount = () => {
  return useAppSelector((state: RootState) => state.products.cartProductsCount);
};

export const useProducts = () => {
  return useAppSelector((state: RootState) => state.products.products);
};

export const useFilterOptions = () => {
  return useAppSelector((state: RootState) => state.products.filterOptions);
};
