import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { Role } from 'src/app/role/role.decorator';
import { RoleGuard } from 'src/app/role/role.guard';

@Controller('/v1/users')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index(@Query() query: GetUserDto) {
    return await this.userService.findAll(query);
  }

  @Post()
  async store(@Body() data: CreateUserDto) {
    return await this.userService.store(data);
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get(':id')
  async show(@Param('id') id: string) {
    return await this.userService.findById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return await this.userService.update(+id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string) {
    return await this.userService.destroy(+id);
  }
}
