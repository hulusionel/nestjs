import { Statuses } from '../interfaces';
import { UserUpdateDto } from '.';

export class UserDeleteDto extends UserUpdateDto {
  status = Statuses.DELETED;
  deletedAt = new Date();
}
