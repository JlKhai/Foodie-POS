import { GetMenusOptions, MenuSlice } from "@/types/menu";
import { MenuCategoryMenuSlice } from "@/types/menuCategoryMenu";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MenuCategoryMenuSlice = {
  items: [],
  isLoading: false,
  isError: null,
};

// export const getMenus = createAsyncThunk(
//   "menu/getMenus",
//   async (options: GetMenusOptions, thunkApi) => {
//     const { locationId, onSuccess, onError } = options;
//     try {
//       const res = await fetch(
//         `${config.apiBaseUrl}/menu?locationId=${locationId}`
//       );
//       const menus = await res.json();
//       thunkApi.dispatch(setMenus(menus));
//       onSuccess && onSuccess();
//     } catch (error) {
//       onError && onError(error);
//     }
//   }
// );

export const menuCategoryMenuSlice = createSlice({
  name: "menuCategoryMenu",
  initialState,
  reducers: {
    setMenuCategoryMenus: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setMenuCategoryMenus } = menuCategoryMenuSlice.actions;
export default menuCategoryMenuSlice.reducer;
