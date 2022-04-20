import { EntityRepository, In, Repository } from 'typeorm';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  // public createUser(data: CreateUserDto): Promise<UserEntity> {
  //   return this.save(data);
  // }
  // public updateUser(id: number, data: UpdateUserDto): Promise<UserEntity> {
  //   return new Promise((resolve, reject) => {
  //     this.update(id, data)
  //       .then((resp) => resolve(resp.raw))
  //       .catch((error) => reject(error));
  //   });
  // }
  //
  // public findByIds(ids: number[]): Promise<UserEntity[]> {
  //   return this.find({
  //     where: {
  //       id: In(ids),
  //     },
  //   });
  // }
}
