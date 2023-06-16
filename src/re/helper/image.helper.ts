import {
  IImageResponse,
  IMAGE_VARIANT_ENUM,
} from "../image";

const getImageURL = (
  image: IImageResponse,
  variant = IMAGE_VARIANT_ENUM.PUBLIC
): string => {
  if (!image) {
    return "";
  }

  return image[variant] ?? image[IMAGE_VARIANT_ENUM.PUBLIC];
};

export { getImageURL };
