import { IsNotEmpty, MinLength, MaxLength, IsEmail } from 'class-validator';

import { personalInformation } from '../../constants';

export class UserUpdateDto {
  @IsNotEmpty()
  @MinLength(personalInformation.minLength)
  @MaxLength(personalInformation.maxLength)
  name: string;

  @IsNotEmpty()
  @MinLength(personalInformation.minLength)
  @MaxLength(personalInformation.maxLength)
  surname: string;

  @IsNotEmpty()
  @MinLength(personalInformation.passwordCharacterLenght)
  password: string;

  @IsEmail()
  mail: string;

  roles: string[];

  status: number;
}
