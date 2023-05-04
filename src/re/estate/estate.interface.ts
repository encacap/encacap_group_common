import { ICategory } from "../category";
import { ICloudflareImageResponse } from "../cloudflare";
import { IContact } from "../contact";
import {
  ILocationDistrict,
  ILocationProvince,
  ILocationWard,
} from "../location";
import { IUnitPrice } from "../unit-price";
import { IEstateQuarter } from "./estate-quarter.interface";
import { ESTATE_STATUS_ENUM } from "./estate-status.constant";

export interface IEstate {
  id: number;
  title: string;
  customId: string;
  price: number;
  area: number;
  address: string;
  addressNote?: string;
  description: string;
  avatar: ICloudflareImageResponse;
  images: ICloudflareImageResponse[];
  province: ILocationProvince;
  district: ILocationDistrict;
  ward?: ILocationWard;
  createdAt: Date;
  updatedAt: Date;
  category: ICategory;
  quarter?: IEstateQuarter;
  status: ESTATE_STATUS_ENUM;
  areaUnit: IUnitPrice;
  priceUnit: IUnitPrice;
  contact: IContact;
  youtubeId?: string;
}
