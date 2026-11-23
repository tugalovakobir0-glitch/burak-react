import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";
import { getDefaultSettings } from "node:http2";
import ProductPageReducer from "./screens/productsPage/slice";
import OrderPageReducer from "./screens/ordersPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-nocheck
    getDefaultMiddleware().concat(reduxLogger as any),
  reducer: {
    homePage: HomePageReducer,
    productPage: ProductPageReducer,
    ordersPage: OrderPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
