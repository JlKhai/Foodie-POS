import { AppSlice, GetAppOptions } from "@/types/app";
import { GetMenusOptions, MenuSlice } from "@/types/menu";
import { config } from "@/utils/config";
import { Apps } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMenus } from "./menuSlice";
import { setMenuCategories } from "./menuCategorySlice";
import { setAddons } from "./addonSlice";
import { setAddonCategories } from "./addonCategorySlice";
import { setLocations } from "./locationSlice";
import { setTables } from "./tableSlice";

const initialState: AppSlice = {
  init: false,
  isLoading: false,
  isError: null,
};

export const fetchAppData = createAsyncThunk(
  "app/fetchAppData",
  async (options: GetAppOptions, thunkApi) => {
    const { onSuccess, onError } = options;
    try {
      const res = await fetch(`${config.apiBaseUrl}/app`);
      const appData = await res.json();
      const {
        menus,
        menuCategories,
        addons,
        addonCategories,
        locations,
        tables,
      } = appData;
      thunkApi.dispatch(setInit(true));
      thunkApi.dispatch(setMenus(menus));
      thunkApi.dispatch(setMenuCategories(menuCategories));
      thunkApi.dispatch(setAddons(addons));
      thunkApi.dispatch(setAddonCategories(addonCategories));
      thunkApi.dispatch(setLocations(locations));
      thunkApi.dispatch(setTables(tables));
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInit: (state, { payload }) => {
      state.init = payload;
    },
  },
});

export const { setInit } = appSlice.actions;
export default appSlice.reducer;
