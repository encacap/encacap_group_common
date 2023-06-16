import { ICategory } from "../category";
import { ESTATE_STATUS_ENUM } from "../estate";
import { IImageResponse } from "../image";

export interface IPost {
  id: number;
  title: string;
  code: string;
  content: string;
  avatar: IImageResponse;
  category: ICategory;
  categoryId: number;
  status: ESTATE_STATUS_ENUM;
  updatedAt: Date;
  createdAt: Date;
  deletedAt: Date | null;
}
