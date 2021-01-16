import { IsNotEmpty, MinLength, MaxLength, IsEmail } from 'class-validator';
import { AuditModel, RoleModel } from 'tools/models';
import { Statuses } from '../interfaces';

import { personalInformation } from '../../constants';

export class UserCreateDto {
  @IsNotEmpty()
  @MinLength(personalInformation.minLength)
  @MaxLength(personalInformation.maxLength)
  name: string;

  @IsNotEmpty()
  @MinLength(personalInformation.minLength)
  @MaxLength(personalInformation.maxLength)
  surname: string;

  @MinLength(personalInformation.passwordCharacterLenght)
  password: string;

  @IsEmail()
  mail: string;

  status: Statuses;
}

export class UserLoginDto {
  @MinLength(personalInformation.passwordCharacterLenght)
  password: string;

  @IsEmail()
  mail: string;
}

export class UserUpdateDto {
  @IsNotEmpty()
  @MinLength(personalInformation.minLength)
  @MaxLength(personalInformation.maxLength)
  name: string;

  @IsNotEmpty()
  @MinLength(personalInformation.minLength)
  @MaxLength(personalInformation.maxLength)
  surname: string;

  @MinLength(personalInformation.passwordCharacterLenght)
  password: string;

  @IsEmail()
  mail: string;

  roles: RoleModel[];

  audit: AuditModel[];

  status: Statuses;
}

export class UserDeleteDto extends UserUpdateDto {
  status: Statuses;
  deletedAt = new Date();
}
