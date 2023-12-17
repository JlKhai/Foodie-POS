import { AddonCategory } from "@prisma/client";
import { BaseOptions } from "./app";

export interface AddonCategorySlice {
  items: AddonCategory[];
  isLoading: boolean;
  isError: Error | null;
}

export interface GetAddonCategoryOptions extends BaseOptions {
  locationId: string;
}
