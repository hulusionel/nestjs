import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UsersRepository } from './user.repository';
import { UserService } from './user.service';
import { UserSchema } from '../tools/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'userNest', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
})
export class UserModule {}
