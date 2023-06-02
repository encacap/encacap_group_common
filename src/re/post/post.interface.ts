import { ICategory } from "../category";
import { ESTATE_STATUS_ENUM } from "../estate";

export interface IPost {
  id: number;
  title: string;
  code: string;
  content: string;
  avatar: string;
  category: ICategory;
  categoryId: number;
  status: ESTATE_STATUS_ENUM;
}
