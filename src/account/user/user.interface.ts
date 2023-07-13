import { IPermission } from "../permission";
import { IRole } from "../role";

export interface IUser {
  id: number;
  email: string;
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  roles: IRole[];
  permissions: IPermission[];
}
