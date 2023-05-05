import { ICategory } from "./category.interface";

export interface ICategoryProperty {
  id: number;
  name: string;
  category: ICategory;
  categoryId: number;
}
