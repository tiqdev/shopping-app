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

export const useModelList = () => {
  return useAppSelector((state: RootState) => state.products.modelList);
};

export const useBrandList = () => {
  return useAppSelector((state: RootState) => state.products.brandList);
};

export const useCart = () => {
  return useAppSelector((state: RootState) => state.products.cart);
};

export const useCartTotalPrice = () => {
  return useAppSelector((state: RootState) => state.products.cartTotalPrice);
};

export const useIsCartSheetOpen = () => {
  return useAppSelector((state: RootState) => state.products.isCartSheetOpen);
};

export const useIsFilterSheetOpen = () => {
  return useAppSelector((state: RootState) => state.products.isFilterSheetOpen);
};
