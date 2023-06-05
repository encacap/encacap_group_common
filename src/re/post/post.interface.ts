import { ICategory } from "../category";
import { ICloudflareImageResponse } from "../cloudflare";
import { ESTATE_STATUS_ENUM } from "../estate";

export interface IPost {
  id: number;
  title: string;
  code: string;
  content: string;
  avatar: ICloudflareImageResponse;
  category: ICategory;
  categoryId: number;
  status: ESTATE_STATUS_ENUM;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
}
