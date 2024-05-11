import { filterBrands, filterModels } from "@/lib/utils";
import { CartProduct } from "@/models/CartProduct";
import { FilterOptions } from "@/models/FilterOptions";
import { Product } from "@/models/Product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

type InitialStateType = {
  products: Product[];
  productsLoading: boolean;
  isSearchLoading: boolean;
  cart: CartProduct[];
  cartProductsCount: number;
  cartTotalPrice: number;
  cartLoading: boolean;
  isCartSheetOpen: boolean;
  isFilterSheetOpen: boolean;
  selectedSort: string;
  filterOptions: FilterOptions;
  modelList: string[];
  brandList: string[];
};

const initialState: InitialStateType = {
  products: [],
  productsLoading: false,
  isSearchLoading: false,
  cart: [],
  cartProductsCount: 0,
  cartTotalPrice: 0,
  cartLoading: false,
  isCartSheetOpen: false,
  isFilterSheetOpen: false,
  filterOptions: {
    sort: "price-low-high",
    brands: [],
    models: [],
    search: "",
    page: 1,
  },
  selectedSort: "price-low-high",
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

    _setSelectedSort: (state, action: PayloadAction<string>) => {
      state.selectedSort = action.payload;
    },

    _setisCartSheetOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartSheetOpen = action.payload;
    },

    _setIsSearchLoading: (state, action: PayloadAction<boolean>) => {
      state.isSearchLoading = action.payload;
    },

    _setIsFilterSheetOpen: (state, action: PayloadAction<boolean>) => {
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

      toast.info("Product added to cart");
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
      toast.info("Product quantity updated");
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

      //
      state.cartTotalPrice = state.cart.reduce(
        (acc, product) => acc + Number(product.price) * product.quantity,
        0
      );

      state.cartProductsCount = state.cart.reduce(
        (acc, product) => acc + product.quantity,
        0
      );

      toast.info("Product quantity updated");
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
      state.products = action.payload;
      state.brandList = filterBrands(action.payload);
      state.modelList = filterModels(action.payload);
      state.productsLoading = false;
    });
    builder.addCase(_fetchProducts.rejected, (state) => {
      state.productsLoading = false;
      toast.error("An error occurred while fetching products.");
    });
  },
});

export const _fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );

      if (response.status !== 200) return [];

      return response.data;
    } catch (error) {
      return [];
    }
  }
);

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
  _setIsSearchLoading,
  _setSelectedSort,
} = ProductSlice.actions;
export default ProductSlice.reducer;
