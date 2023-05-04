import { AxiosError, AxiosResponse } from "axios";
import { FieldPath, FieldValues } from "react-hook-form";

export interface BaseListQueryType extends Record<string, unknown> {
  page?: number;
  limit?: number;
  filterBy?: string;
  filterValue?: string;
  sortBy?: string;
  searchValue?: string;
  searchBy?: string;
}

export interface AxiosErrorDataType {
  statusCode: number;
  message: string;
  error: {
    code: number;
    message: string;
    field: Record<FieldPath<FieldValues>, string[]>;
  };
  code: string;
}

export type AxiosErrorType = AxiosError<AxiosErrorDataType>;

export interface ResponseMetaType {
  page: number;
  limit: number;
  totalRows: number;
  totalPages: number;
}

export interface ResponseWithMetaType<T = unknown>
  extends Partial<AxiosResponse> {
  data: T;
  meta: ResponseMetaType;
}

export interface AxiosResponseType<T> extends AxiosResponse {
  statusCode: number;
  message: string;
  meta: ResponseMetaType;
  data: {
    data: T;
  };
}
