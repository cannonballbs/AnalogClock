import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./slices/clock";

const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["clock/updateTime/fulfilled"],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
