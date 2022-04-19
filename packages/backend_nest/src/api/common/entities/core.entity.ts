import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  status: number;

  @Column()
  @ApiProperty()
  @Type(() => Date)
  created_at: Date;

  @Column()
  @ApiProperty()
  @Type(() => Date)
  updated_at: Date;
}
