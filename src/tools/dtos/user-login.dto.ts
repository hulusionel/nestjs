import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

import { personalInformation } from '../../constants/validation-constants';

export class UserLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(personalInformation.passwordCharacterLenght)
  password: string;
}
