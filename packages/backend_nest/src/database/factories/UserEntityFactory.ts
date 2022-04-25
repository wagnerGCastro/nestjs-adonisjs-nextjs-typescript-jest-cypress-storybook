import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { UserEntity } from 'src/app/user/user.entity';

define(UserEntity, (faker: typeof Faker) => {
  const firstName = faker.name.findName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName).toLowerCase();

  const user = new UserEntity();
  user.first_name = firstName;
  user.last_name = lastName;
  user.email = email;
  user.password = 'password';

  return user;
});
