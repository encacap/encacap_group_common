import { DEFAULT_CLOUDFLARE_VARIANT_ENUM } from "./cloudflare-variant.constant";

export interface ICloudflareImageResponse
  extends Record<DEFAULT_CLOUDFLARE_VARIANT_ENUM, string> {
  id: string;
}
