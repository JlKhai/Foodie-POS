import { Table } from "@prisma/client";
import { BaseOptions } from "./app";

export interface TableSlice {
  items: Table[];
  isLoading: boolean;
  isError: Error | null;
}

export interface GetTableOptions extends BaseOptions {
  locationId: string;
}
