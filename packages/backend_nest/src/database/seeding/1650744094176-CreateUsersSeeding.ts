import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from 'src/app/user/user.entity';

export default class CreateUsersSeeding1650744094176 implements Seeder {
  public async run(factory: Factory): Promise<any> {
    // await factory(UserEntity)().create();
    await factory(UserEntity)().createMany(10);
  }
}
