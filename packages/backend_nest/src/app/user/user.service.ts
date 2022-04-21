import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto, UserPaginator } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import Fuse from 'fuse.js';

import { paginate } from 'src/app/common/pagination/paginate';
import usersJson from './users.json';

const users = plainToClass(UserEntity, usersJson);

const options = {
  keys: ['name', 'type.slug', 'categories.slug', 'status'],
  threshold: 0.3,
};

const fuse = new Fuse(users, options);

@Injectable()
export class UserService {
  private users: UserEntity[] = users;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
  ) {}

  async findOneOrFail(
    conditions: FindConditions<UserEntity>,
    options?: FindOneOptions<UserEntity>,
  ) {
    try {
      return await this.userRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAll({ text, limit, page }: GetUserDto): Promise<UserPaginator> {
    if (!page) page = 1;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let data: UserEntity[] = await this.userRepository.find({
      select: ['id', 'fullname', 'email', 'status'],
    });

    if (limit) {
      if (text?.replace(/%/g, '')) {
        data = fuse.search(text)?.map(({ item }) => item);
      }

      const results = data.slice(startIndex, endIndex);
      const url = `/users?limit=${limit}`;

      return {
        data: results,
        ...paginate(data.length, page, limit, results.length, url),
      };
    }

    return { data };
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.findOneOrFail({ id });
  }

  async store(data: CreateUserDto) {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }

  async update(id: number, data: UpdateUserDto) {
    await this.findOneOrFail({ id });
    return await this.userRepository.update(id, data);
  }

  async destroy(id: number) {
    await this.findOneOrFail({ id });
    this.userRepository.softDelete({ id });
  }
}
