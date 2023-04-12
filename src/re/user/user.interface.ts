import { IUser } from "../../account/user";
import { IWebsite } from "../website/website.interface";

export interface IREUser extends IUser {
  website: IWebsite;
  websiteId: number;
}
