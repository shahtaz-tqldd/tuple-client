import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { apiSlice } from "./features/api/apiSlice";
import { apiMiddleware } from "./features/api/refreshToken";

import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  devTools: import.meta.env.VITE_ENV !== "PROD",
  middleware: (gDM) => gDM().concat([apiSlice.middleware, apiMiddleware]),
});

setupListeners(store.dispatch);
