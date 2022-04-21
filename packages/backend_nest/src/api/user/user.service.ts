import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto, UserPaginator } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import Fuse from 'fuse.js';

import { paginate } from 'src/api/common/pagination/paginate';
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

  public async getAll({ text, limit, page }: GetUserDto): Promise<UserPaginator> {
    if (!page) page = 1;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let data: UserEntity[] = await this.userRepository.find();

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

  public async findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ id });
  }

  public create(data: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.save(data);
  }

  public async update(id: number, data: UpdateUserDto): Promise<string> {
    await this.userRepository.update(id, data);
    return `This action update a #${id} user`;
  }

  public async remove(id: number) {
    await this.userRepository.delete(id);
    return `This action remove a #${id} user`;
  }
}
