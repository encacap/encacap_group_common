import { ICloudflareImageResponse } from "../cloudflare";
import { IWebsite } from "../website";
import { CATEGORY_GROUP_ENUM } from "./category-group.constant";

export interface ICategory {
  id: number;
  code: string;
  name: string;
  categoryGroupCode: CATEGORY_GROUP_ENUM;
  thumbnail: ICloudflareImageResponse;
  thumbnailId: string;
  websiteId: number;
  website: IWebsite;
  parentCategoryId: number | null;
  parentCategory: Partial<ICategory> | null;
}
