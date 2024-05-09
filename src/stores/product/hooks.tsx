import { useAppSelector } from "../hooks";
import { RootState } from "..";

export const useCartProductsCount = () => {
  return useAppSelector((state: RootState) => state.products.cartProductsCount);
};
