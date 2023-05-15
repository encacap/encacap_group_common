import { ICloudflareImageResponse } from "../cloudflare";
import { IWebsite } from "../website";

export interface ICategory {
  id: number;
  code: string;
  name: string;
  categoryGroupCode: string;
  thumbnail: ICloudflareImageResponse;
  thumbnailId: string;
  websiteId: number;
  website: IWebsite;
}
