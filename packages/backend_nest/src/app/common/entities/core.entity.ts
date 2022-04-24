import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number;

  @Column({ type: 'integer', default: 0 })
  @ApiProperty()
  status: number;

  @Column({ type: 'timestamp', default: 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  @Type(() => Date)
  created_at: Date;

  @Column({ type: 'timestamp', default: 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  @Type(() => Date)
  updated_at: Date;
}
