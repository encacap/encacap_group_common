import { IMAGE_VARIANT_ENUM } from "./image-variant.constant";

export interface IImageResponse extends Record<IMAGE_VARIANT_ENUM, string> {
  id: string;
}
