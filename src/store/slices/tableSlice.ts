import { AddonSlice } from "@/types/addon";
import { LocationSlice } from "@/types/location";
import { GetMenusOptions, MenuSlice } from "@/types/menu";
import { TableSlice } from "@/types/table";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: TableSlice = {
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

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTables: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setTables } = tableSlice.actions;
export default tableSlice.reducer;
