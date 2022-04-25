import { MigrationInterface, getConnectionManager } from 'typeorm';
import { UserEntity } from 'src/app/user/user.entity';

export class CreateUsersSeed1650744093175 implements MigrationInterface {
  public async up(): Promise<void> {
    const manager = getConnectionManager().get();
    const userRepository = manager.getRepository(UserEntity);

    const user = new UserEntity();
    user.first_name = 'Wagner';
    user.last_name = 'Castro';
    user.email = 'wagner@wagner.com.br';
    user.password = 'password';
    user.status = 1;
    user.created_at = new Date('2022-01-28 12:02:56');
    user.updated_at = new Date('2022-01-28 12:02:56');

    const userCreate = userRepository.create(user);
    await userRepository.save(userCreate);
  }

  public async down(): Promise<void> {
    console.log('Not implemented');
  }
}
