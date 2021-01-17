import { Roles } from '../../constants';
import { AuditModel } from './audit.model';

export class RoleModel {
  id: string;
  name: string;
  audit: AuditModel;
  role: Roles[];
}
