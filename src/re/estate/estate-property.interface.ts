import { ICategoryProperty } from "../category";

export interface IEstateProperty {
  estateId: number;
  categoryPropertyId: number;
  value: string;
  categoryProperty: ICategoryProperty;
  name: string;
  id: number;
}
