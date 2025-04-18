import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        available: true,
      });
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, name, description, price, available } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.name = name;
        product.description = description;
        product.price = price;
        product.available = available;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;