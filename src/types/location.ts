import { Location } from "@prisma/client";
import { BaseOptions } from "./app";

export interface LocationSlice {
  items: Location[];
  isLoading: boolean;
  isError: Error | null;
}

export interface GetLocationOptions extends BaseOptions {
  locationId: string;
}
