import { AddonCategorySlice } from "@/types/addonCategory";
import { GetMenusOptions, MenuSlice } from "@/types/menu";
import { MenuCategorySlice } from "@/types/menuCategory";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AddonCategorySlice = {
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

export const addonCategorySlice = createSlice({
  name: "AddonCategory",
  initialState,
  reducers: {
    setAddonCategories: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setAddonCategories } = addonCategorySlice.actions;
export default addonCategorySlice.reducer;
