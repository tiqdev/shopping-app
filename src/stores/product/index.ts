import { Product } from "@/models/Product";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  products: Product[];
  productsLoading: boolean;
  productsError: string;

  search: string;
  searchLoading: boolean;
  searchError: string;

  cart: Product[];
  cartProductsCount: number;
  cartLoading: boolean;
  cartError: string;

  cartPanelIsOpen: boolean;

  filter: string;
};

const initialState: InitialStateType = {
  products: [],
  productsLoading: false,
  productsError: "",
  search: "",
  searchLoading: false,
  searchError: "",
  cart: [],
  cartProductsCount: 0,
  cartLoading: false,
  cartError: "",
  cartPanelIsOpen: false,
  filter: "",
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    _setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { _setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
