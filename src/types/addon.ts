import { Addon } from "@prisma/client";
import { BaseOptions } from "./app";

export interface AddonSlice {
  items: Addon[];
  isLoading: boolean;
  isError: Error | null;
}

export interface GetAddonOptions extends BaseOptions {
  locationId: string;
}
