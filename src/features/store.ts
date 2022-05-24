import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartReducer, { getTotal } from "./cartSlice";
import { productsApi } from "./productsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

//store.dispatch(getTotal());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
