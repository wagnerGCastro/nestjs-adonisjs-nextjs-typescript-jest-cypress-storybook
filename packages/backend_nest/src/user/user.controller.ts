import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { GetUserDto } from './dto/get-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  getAllUser(@Query() query: GetUserDto) {
    return this.userService.getUsers(query);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post(':id/active')
  activeUser(@Param('id') id: number) {
    console.log(id);
    // return this.userService.getUser(updateUserInput.id);
  }
  @Post(':id/ban')
  banUser(@Param('id') id: number) {
    console.log(id);
    // return this.userService.getUser(updateUserInput.id);
  }
}

@Controller('profile')
export class ProfileController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    console.log(createProfileDto);
  }
  @Put(':id')
  updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    console.log(updateProfileDto);
  }
  @Delete(':id')
  deleteProfile(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
