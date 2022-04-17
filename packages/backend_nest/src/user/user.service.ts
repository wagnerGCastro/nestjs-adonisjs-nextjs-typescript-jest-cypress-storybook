import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto, UserPaginator } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import Fuse from 'fuse.js';

import { User } from './entities/user.entity';
import usersJson from './users.json';

const users = plainToClass(User, usersJson);

const options = {
  keys: ['name', 'type.slug', 'categories.slug', 'status'],
  threshold: 0.3,
};

const fuse = new Fuse(users, options);

@Injectable()
export class UserService {
  private users: User[] = users;

  create(createUserDto: CreateUserDto) {
    return this.users[0];
  }

  async getUsers({ text, limit, page }: GetUserDto): Promise<UserPaginator> {
    if (!page) page = 1;

    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;
    let data: User[] = this.users;
    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }

    console.log('users ==>', data);

    // const results = data.slice(startIndex, endIndex);
    // const url = `/user?limit=${limit}`;

    return {
      data: data,
    };
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.users[0];
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
