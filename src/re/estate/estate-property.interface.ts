import { ICategory } from "../category";

export interface IEstateProperty {
  id: number;
  name: string;
  category: ICategory;
  categoryId: number;
}
