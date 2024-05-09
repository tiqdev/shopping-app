import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product";

const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
