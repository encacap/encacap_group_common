import { ICloudflareImageResponse } from "../cloudflare";

export interface ICategory {
  id: number;
  code: string;
  name: string;
  categoryGroupCode: string;
  thumbnail: ICloudflareImageResponse;
}
