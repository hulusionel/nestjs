import { Statuses } from './statuses.interface';

export interface IUser {
  name: string;
  surname: string;
  status: Statuses;
  password: string;
  roles: string[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
