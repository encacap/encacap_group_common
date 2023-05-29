import { ICategory } from "../category";

export interface IPost {
  id: number;
  title: string;
  code: string;
  content: string;
  avatar: string;
  category: ICategory;
}
