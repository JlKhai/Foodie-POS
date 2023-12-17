import { MenuCategoryMenu } from "@prisma/client";
import { BaseOptions } from "./app";

export interface MenuCategoryMenuSlice {
  items: MenuCategoryMenu[];
  isLoading: boolean;
  isError: Error | null;
}

export interface GetMenuCategoryMenuOptions extends BaseOptions {
  locationId: string;
}
