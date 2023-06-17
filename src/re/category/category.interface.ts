import { IImageResponse } from "../image";
import { IWebsite } from "../website";
import { CATEGORY_GROUP_ENUM } from "./category-group.constant";

export interface ICategory {
  id: number;
  code: string;
  name: string;
  categoryGroupCode: CATEGORY_GROUP_ENUM;
  avatar: IImageResponse;
  avatarId: string;
  websiteId: number;
  website: IWebsite;
  parent: ICategory | null;
  children: ICategory[] | null;
  createdAt: Date;
  updatedAt: Date;
}
