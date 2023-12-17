import { MenuAddonCategory } from "@prisma/client";
import { BaseOptions } from "./app";

export interface MenuAddonCategorySlice {
  items: MenuAddonCategory[];
  isLoading: boolean;
  isError: Error | null;
}

export interface GetMenuAddonCategoryOptions extends BaseOptions {
  locationId: string;
}
