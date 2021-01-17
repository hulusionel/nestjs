import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetParamsDto, UserCreateDto, UserUpdateDto } from '../tools/dtos';

@Controller('userNest')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: UserCreateDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Query() params: GetParamsDto) {
    return await this.userService.findAll(params);
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string) {
    return await this.userService.findOne(userId);
  }

  @Patch(':userId')
  async updateUserById(
    @Param('userId') userId: string,
    @Body() updateUserDto: UserUpdateDto,
  ) {
    return await this.userService.updateUserById(userId, updateUserDto);
  }

  @Patch(':userId/activate')
  async activateUserById(@Param('userId') userId: string) {
    return await this.userService.activateUserById(userId);
  }

  @Patch(':userId/deactivate')
  async deactivateUserById(@Param('userId') userId: string) {
    return await this.userService.deactivateUserById(userId);
  }
}
