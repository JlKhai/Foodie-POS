import {
  CreateMenuCategoryOptions,
  MenuCategorySlice,
} from "@/types/menuCategory";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { config } from "@/utils/config";

const initialState: MenuCategorySlice = {
  items: [],
  isLoading: false,
  isError: null,
};

export const createMenuCategory = createAsyncThunk(
  "menuCategory/createMenuCategory",
  async (options: CreateMenuCategoryOptions, thunkApi) => {
    const { name, locationId, onSuccess, onError } = options;
    try {
      const res = await fetch(`${config.apiBaseUrl}/menu-category`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, locationId }),
      });
      const menuCategory = await res.json();
      thunkApi.dispatch(addMenuCategories(menuCategory));
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }
);

export const menuCategorySlice = createSlice({
  name: "MenuCategory",
  initialState,
  reducers: {
    setMenuCategories: (state, { payload }) => {
      state.items = payload;
    },
    addMenuCategories: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
  },
});

export const { setMenuCategories, addMenuCategories } =
  menuCategorySlice.actions;
export default menuCategorySlice.reducer;
