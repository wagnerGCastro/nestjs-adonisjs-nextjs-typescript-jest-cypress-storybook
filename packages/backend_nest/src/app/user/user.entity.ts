import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, BeforeInsert } from 'typeorm';
import { hashSync } from 'bcrypt';

import { CoreEntity } from 'src/app/common/entities/core.entity';

@Entity({ name: 'users' })
export class UserEntity extends CoreEntity {
  @Column()
  @ApiProperty()
  first_name: string;

  @Column()
  @ApiProperty()
  last_name: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
