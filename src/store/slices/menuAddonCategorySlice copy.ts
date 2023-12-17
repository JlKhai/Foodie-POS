import { GetMenusOptions, MenuSlice } from "@/types/menu";
import { MenuAddonCategorySlice } from "@/types/menuAddonCategory";
import { MenuCategorySlice } from "@/types/menuCategory";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MenuAddonCategorySlice = {
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

export const menuAddonCategorySlice = createSlice({
  name: "MenuAddonCategory",
  initialState,
  reducers: {
    setMenuAddonCategories: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setMenuAddonCategories } = menuAddonCategorySlice.actions;
export default menuAddonCategorySlice.reducer;
