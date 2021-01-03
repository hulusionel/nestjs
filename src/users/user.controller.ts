import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetParamsDto, UserCreateDto, UserUpdateDto } from '../tools/dtos';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: UserCreateDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() params: GetParamsDto) {
    return this.userService.findAll(params);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.userService.findOne(userId);
  }

  @Patch(':userId')
  updateUserById(
    @Param('userId') userId: string,
    @Body() updateUserDto: UserUpdateDto,
  ) {
    return this.userService.updateUserById(userId, updateUserDto);
  }

  @Delete(':userId')
  deleteUserById(@Param('userId') userId: string) {
    return this.userService.deleteUserById(userId);
  }
}
