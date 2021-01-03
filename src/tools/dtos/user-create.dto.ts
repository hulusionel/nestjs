import { IsNotEmpty, MinLength, MaxLength, IsEmail } from 'class-validator';

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

  roles: string[];

  status: number;
}
