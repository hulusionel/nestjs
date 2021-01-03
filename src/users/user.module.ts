import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
})
export class UserModule {}
