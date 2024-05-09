import { FilterOptions } from "@/models/FilterOptions";
import { Product } from "@/models/Product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

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

  filterOptions: FilterOptions;
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
  filterOptions: {
    sort: "price-low-high",
    brands: [],
    models: [],
    search: "",
    page: 1,
  },
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    _setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(_fetchProducts.pending, (state) => {
      state.productsLoading = true;
    });
    builder.addCase(_fetchProducts.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.products = action.payload;
    });
    builder.addCase(_fetchProducts.rejected, (state) => {
      state.productsLoading = false;
      state.productsError = "An error occurred while fetching products.";
    });
  },
});

export const { _setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const _fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
);
