import { ICloudflareImageResponse } from "../cloudflare";

export interface IContact {
  id: number;
  name: string;
  phone: string;
  zalo: string;
  email: string;
  avatarId: string;
  avatar: ICloudflareImageResponse;
}
