import { IWebsite } from "../website";
import { CONFIG_GROUP_ENUM, CONFIG_TYPE_ENUM } from "./config.constant";

export interface IConfig {
  code: string;
  group: CONFIG_GROUP_ENUM;
  type: CONFIG_TYPE_ENUM;
  value?: string | number | boolean;
  websiteId?: string;
  website: IWebsite;
}
