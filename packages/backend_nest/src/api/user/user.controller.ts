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
import { GetUserDto } from './dto/get-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  index(@Query() query: GetUserDto) {
    return this.userService.getAll(query);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post(':id/active')
  active(@Param('id') id: number) {
    console.log(id);
    // return this.userService.getUser(updateUserInput.id);
  }
  @Post(':id/ban')
  ban(@Param('id') id: number) {
    console.log(id);
    // return this.userService.getUser(updateUserInput.id);
  }
}
