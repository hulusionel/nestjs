import { Document } from 'mongoose';
import { AuditModel, RoleModel } from 'tools/models';
import { Statuses } from '../../constants';

export interface IUser extends Document {
  name: string;
  surname: string;
  status: Statuses;
  password: string;
  hashedPassword: string;
  mail: string;
  roles: RoleModel[];
  audit: AuditModel[];
}
