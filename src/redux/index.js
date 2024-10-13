import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSliceReducer from "./productSlice";
import reviewSliceReducer from "./reviewSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSliceReducer,
    review: reviewSliceReducer,
    cart: cartReducer
  },
});
