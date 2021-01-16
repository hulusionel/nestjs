import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { AuditModel } from 'tools/models';

import { UserCreateDto, UserUpdateDto } from '../tools/dtos';
import { IUser, Statuses, IQueryParams } from '../tools/interfaces';

@Injectable()
export class UsersRepository {
  // private readonly statusFilter: FilterQuery<unknown>;

  constructor(@InjectModel('userNest') private userModel: Model<IUser>) {
    /* this.statusFilter = {
      status: {
        $ne: Statuses.DELETED,
      },
    }; */
  }

  public async create(createUserDto: UserCreateDto) {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Admin';
    audit.createdAt = new Date();
    const createdUser = new this.userModel({ ...createUserDto, ...audit });

    return await createdUser.save();
  }

  async findAll({ limit, offset, fields }: IQueryParams) {
    return await this.userModel
      .find()
      .limit(limit)
      .skip(offset)
      .select(fields)
      .sort({ createdAt: -1 })
      .exec();
  }

  async findOne(_id: string) {
    const query = {
      _id,
    };
    return await this.userModel.findOne(query).exec();
  }

  async updateUserById(_id: string, data: UserUpdateDto) {
    const query = {
      _id,
    };
    return await this.userModel
      .findByIdAndUpdate(query, data, { new: true })
      .exec();
  }
}
