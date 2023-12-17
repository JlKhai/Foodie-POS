import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import menuReducer from "./slices/menuSlice";
import menuCategoryReducer from "./slices/menuCategorySlice";
import addonReducer from "./slices/addonSlice";
import addonCategoryReducer from "./slices/addonCategorySlice";
import locationReducer from "./slices/locationSlice";
import tableReducer from "./slices/tableSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    menu: menuReducer,
    menuCategory: menuCategoryReducer,
    addon: addonReducer,
    addonCategory: addonCategoryReducer,
    location: locationReducer,
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
