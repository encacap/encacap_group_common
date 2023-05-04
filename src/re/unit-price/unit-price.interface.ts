import { UNIT_PRICE_TYPE_ENUM } from "./unit-price.constant";

export interface IUnitPrice {
  id: number;
  name: string;
  type: UNIT_PRICE_TYPE_ENUM;
}
