import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model, FilterQuery } from 'mongoose';

import { UserCreateDto, UserUpdateDto } from '../tools/dtos';
import { IUser, Statuses, IQueryParams } from '../tools/interfaces';

const result = [];

@Injectable()
export class UsersRepository {
  // private readonly statusFilter: FilterQuery<unknown>;

  /* constructor(@InjectModel('user') private userModel: Model<IUser>) {
    this.statusFilter = {
      status: {
        $ne: Statuses.DELETED,
      },
    };
  } */

  public async create(createUserDto: UserCreateDto) {
    //const createdUser = new this.userModel(createUserDto);
    const createUser = result.push(createUserDto);
    // return await createdUser.save();
    console.log('deneme:', createUserDto);
    return createUser;
  }

  public find({ limit, offset, fields }: IQueryParams) {
    return result;
  }

  public findOne(_id: string) {
    return result;
  }

  public updateUserById(_id: string, data: UserUpdateDto) {
    return result;
  }
}
