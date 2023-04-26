import { CONFIG_GROUP_ENUM, CONFIG_TYPE_ENUM } from "./config.constant";

export interface IConfig {
  code: string;
  group: CONFIG_GROUP_ENUM;
  type: CONFIG_TYPE_ENUM;
  defaultValue: string | number | boolean;
  value?: string | number | boolean;
}
