import { Menu } from "@prisma/client";
import { BaseOptions } from "./app";

export interface MenuSlice {
  items: Menu[];
  isLoading: boolean;
  isError: Error | null;
}

export interface GetMenusOptions extends BaseOptions {
  locationId: string;
}
