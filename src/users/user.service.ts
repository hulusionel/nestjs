import { Injectable } from '@nestjs/common';
import { UserUpdateDto, UserCreateDto } from 'tools/dtos';
import { IQueryParams } from '../tools/interfaces';
import { UsersRepository } from './user.repository';
import { Statuses } from '../constants';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async create(createUserDto: UserCreateDto) {
    const status = Statuses.INACTIVE;
    return this.usersRepository.create(createUserDto, status);
  }

  async findAll(params: IQueryParams) {
    return await this.usersRepository.findAll(params);
  }

  async findOne(id: string) {
    return await this.usersRepository.findOne(id);
  }

  async updateUserById(id: string, data: UserUpdateDto) {
    return await this.usersRepository.updateUserById(id, data);
  }

  async activateUserById(id: string) {
    const status = Statuses.ACTIVE;
    if (await this.isStatusAlreadyChanged(status, id)) {
      throw 'User status not shanged';
    }
    return await this.usersRepository.updateUserById(id, <UserUpdateDto>{
      status,
    });
  }

  async deactivateUserById(id: string) {
    const status = Statuses.INACTIVE;
    if (await this.isStatusAlreadyChanged(status, id)) {
      throw 'User status not shanged';
    }
    return await this.usersRepository.updateUserById(id, <UserUpdateDto>{
      status,
    });
  }

  private async isStatusAlreadyChanged(
    status: Statuses,
    id: string,
  ): Promise<boolean> {
    const { status: currentStatus } =
      (await this.usersRepository.findOne(id)) || {};

    return status === currentStatus;
  }
}
