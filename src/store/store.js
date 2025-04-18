import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;