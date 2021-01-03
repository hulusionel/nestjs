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

  public findAll(params: IQueryParams) {
    return this.usersRepository.find(params);
  }

  public findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  public updateUserById(id: string, data: UserUpdateDto) {
    return this.usersRepository.updateUserById(id, data);
  }

  public async deleteUserById(id: string) {
    return this.usersRepository.updateUserById(id, new UserDeleteDto());
  }
}
