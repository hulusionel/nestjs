import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { AuditModel } from 'tools/models';

import { UserCreateDto, UserUpdateDto } from '../tools/dtos';
import { IUser, IQueryParams } from '../tools/interfaces';
import { Statuses } from '../constants';

@Injectable()
export class UsersRepository {
  private readonly statusFilter: FilterQuery<unknown>;

  constructor(@InjectModel('userNest') private userModel: Model<IUser>) {
    this.statusFilter = {
      status: {
        $ne: Statuses.DELETED,
      },
    };
  }

  public async create(createUserDto: UserCreateDto, status: Statuses) {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Admin';
    audit.createdAt = new Date();
    const createdUser = new this.userModel({
      ...createUserDto,
      ...audit,
      status,
    });

    return await createdUser.save();
  }

  async findAll({ limit, offset, fields }: IQueryParams) {
    return await this.userModel
      .find(this.statusFilter)
      .limit(limit)
      .skip(offset)
      .select(fields)
      .sort({ createdAt: -1 })
      .exec();
  }

  async findOne(_id: string) {
    const query = {
      _id,
      ...this.statusFilter,
    };
    return await this.userModel.findOne(query).exec();
  }

  async updateUserById(_id: string, data: UserUpdateDto) {
    const query = {
      _id,
      ...this.statusFilter,
    };
    return await this.userModel
      .findOneAndUpdate(query, data, { new: true })
      .exec();
  }
}
