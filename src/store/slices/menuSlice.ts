import { GetMenusOptions, MenuSlice } from "@/types/menu";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MenuSlice = {
  items: [],
  isLoading: false,
  isError: null,
};

export const getMenus = createAsyncThunk(
  "menu/getMenus",
  async (options: GetMenusOptions, thunkApi) => {
    const { locationId, onSuccess, onError } = options;
    try {
      const res = await fetch(
        `${config.apiBaseUrl}/menu?locationId=${locationId}`
      );
      const menus = await res.json();
      thunkApi.dispatch(setMenus(menus));
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setMenus } = menuSlice.actions;
export default menuSlice.reducer;
