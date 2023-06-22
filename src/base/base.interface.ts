import { AxiosError, AxiosResponse } from "axios";

export interface IBaseListQuery extends Record<string, unknown> {
  page?: number;
  limit?: number;
  filterBy?: string;
  filterValue?: string;
  sortBy?: string;
  searchValue?: string;
  searchBy?: string;
}

export interface IAxiosErrorData {
  statusCode: number;
  message: string;
  error: {
    code: number;
    message: string;
    field: Record<string, string[]>;
  };
  code: string;
}

export type IAxiosError = AxiosError<IAxiosErrorData>;

export interface IResponseMeta {
  page: number;
  limit: number;
  totalRows: number;
  totalPages: number;
}

export interface IResponseWithMeta<T = unknown> extends Partial<AxiosResponse> {
  data: T;
  meta: IResponseMeta;
}

export interface IAxiosResponse<T> extends AxiosResponse {
  statusCode: number;
  message: string;
  meta: IResponseMeta;
  data: {
    data: T;
  };
}
