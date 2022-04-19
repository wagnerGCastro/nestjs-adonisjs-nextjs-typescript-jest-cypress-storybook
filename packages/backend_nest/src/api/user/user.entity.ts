import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

import { CoreEntity } from 'src/api/common/entities/core.entity';

@Entity({ name: 'users' })
export class UserEntity extends CoreEntity {
  @Column()
  @ApiProperty()
  fullname: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column()
  @ApiProperty()
  status: number;
}
