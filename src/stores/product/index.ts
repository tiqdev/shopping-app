import { filterBrands, filterModels } from "@/lib/utils";
import { CartProduct } from "@/models/CartProduct";
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

  cart: CartProduct[];
  cartProductsCount: number;
  cartTotalPrice: number;
  cartLoading: boolean;
  cartError: string;

  isCartSheetOpen: boolean;
  isFilterSheetOpen: boolean;

  filterOptions: FilterOptions;
  modelList: string[];
  brandList: string[];
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
  cartTotalPrice: 0,
  cartLoading: false,
  cartError: "",
  isCartSheetOpen: false,
  isFilterSheetOpen: false,
  filterOptions: {
    sort: "price-low-high",
    brands: [],
    models: [],
    search: "",
    page: 1,
  },
  modelList: [],
  brandList: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    _setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    _setFilterOptions: (state, action: PayloadAction<FilterOptions>) => {
      state.filterOptions = action.payload;
    },

    _setBrandList: (state, action: PayloadAction<string[]>) => {
      state.brandList = action.payload;
    },

    _setModelList: (state, action: PayloadAction<string[]>) => {
      state.modelList = action.payload;
    },

    _setisCartSheetOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartSheetOpen = action.payload;
    },

    _setIsFilterSheetOpen: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload, "action.payload");
      state.isFilterSheetOpen = action.payload;
    },

    _addToCart: (state, action: PayloadAction<string>) => {
      // Check if the product is already in the cart
      const existingProductIndex = state.cart.findIndex(
        (p) => p.id === action.payload
      );

      // Find the product in the products array
      const _product = state.products.find((p) => p.id === action.payload);

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity++;
      } else {
        if (_product) {
          const newProduct: CartProduct = { ..._product, quantity: 1 };
          state.cart.push(newProduct);
        }
      }
      state.cartTotalPrice = state.cart.reduce(
        (acc, product) => acc + Number(product.price) * product.quantity,
        0
      );
      state.cartProductsCount = state.cart.reduce(
        (acc, product) => acc + product.quantity,
        0
      );
    },

    _incrementProductQuantity: (state, action: PayloadAction<string>) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.id === action.payload
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity++;
      }
      state.cartTotalPrice = state.cart.reduce(
        (acc, product) => acc + Number(product.price) * product.quantity,
        0
      );
      state.cartProductsCount = state.cart.reduce(
        (acc, product) => acc + product.quantity,
        0
      );
    },

    _decrementProductQuantity: (state, action: PayloadAction<string>) => {
      const existingProductIndex = state.cart.findIndex(
        (p) => p.id === action.payload
      );

      if (existingProductIndex !== -1) {
        if (state.cart[existingProductIndex].quantity > 1) {
          state.cart[existingProductIndex].quantity--;
        } else {
          state.cart = state.cart.filter((p) => p.id !== action.payload);
        }
      }

      state.cartTotalPrice = state.cart.reduce(
        (acc, product) => acc + Number(product.price) * product.quantity,
        0
      );
      state.cartProductsCount = state.cart.reduce(
        (acc, product) => acc + product.quantity,
        0
      );
    },

    _setCart: (state, action: PayloadAction<CartProduct[]>) => {
      state.cart = action.payload;
    },

    _setCartTotalPrice: (state, action) => {
      state.cartTotalPrice = action.payload;
    },

    _setCartProductsCount: (state, action) => {
      state.cartProductsCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(_fetchProducts.pending, (state) => {
      state.productsLoading = true;
    });
    builder.addCase(_fetchProducts.fulfilled, (state, action) => {
      state.productsLoading = false;
      state.products = action.payload;

      state.brandList = filterBrands(action.payload);
      state.modelList = filterModels(action.payload);
    });
    builder.addCase(_fetchProducts.rejected, (state) => {
      state.productsLoading = false;
      state.productsError = "An error occurred while fetching products.";
    });
  },
});

export const {
  _setProducts,
  _addToCart,
  _incrementProductQuantity,
  _decrementProductQuantity,
  _setCart,
  _setCartTotalPrice,
  _setCartProductsCount,
  _setisCartSheetOpen,
  _setFilterOptions,
  _setModelList,
  _setBrandList,
  _setIsFilterSheetOpen,
} = ProductSlice.actions;
export default ProductSlice.reducer;

export const _fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
);
