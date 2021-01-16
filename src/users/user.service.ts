import { Injectable } from '@nestjs/common';
import { UserUpdateDto, UserDeleteDto, UserCreateDto } from 'tools/dtos';
import { IQueryParams } from '../tools/interfaces';
import { UsersRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async create(createUserDto: UserCreateDto) {
    return this.usersRepository.create(createUserDto);
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

  async deleteUserById(id: string) {
    return await this.usersRepository.updateUserById(id, new UserDeleteDto());
  }
}
