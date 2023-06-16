import { IImageResponse } from "../image";

export interface IContact {
  id: number;
  name: string;
  phone: string;
  zalo: string;
  email: string;
  avatarId: string;
  avatar: IImageResponse;
}
