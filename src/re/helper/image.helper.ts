import {
  DEFAULT_CLOUDFLARE_VARIANT_ENUM,
  ICloudflareImageResponse,
} from "../cloudflare";

const getImageURL = (
  image: ICloudflareImageResponse,
  variant = DEFAULT_CLOUDFLARE_VARIANT_ENUM.PUBLIC
): string => {
  if (!image) {
    return "";
  }

  return image[variant] ?? image[DEFAULT_CLOUDFLARE_VARIANT_ENUM.PUBLIC];
};

export { getImageURL };
