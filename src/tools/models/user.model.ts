import * as mongoose from 'mongoose';
import { Statuses } from '../interfaces';

import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';

export class UserModel {
  _id: string; // TODO: maybe changed
  name: string;
  surname: string;
  status: Statuses;
  password: string;
  hashedPassword: string;
  mail: string;
  roles: RoleModel[];
  audit: AuditModel[];
}

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  status: Statuses,
  password: Number,
  mail: String,
  roles: Array,
  audit: Object,
});
