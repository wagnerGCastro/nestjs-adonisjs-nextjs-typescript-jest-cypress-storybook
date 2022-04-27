import { PickType, ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../user.entity';
import { IsNumber, IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

import { messagesHelper, regexPassdHelper } from 'src/utils/helpers';

export class CreateUserDto extends PickType(UserEntity, [
  'fullname',
  'email',
  'password',
  'status',
]) {
  @ApiProperty({ description: 'User full name' })
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @ApiProperty({ description: 'User email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'User password' })
  @IsNotEmpty()
  @Matches(regexPassdHelper, { message: messagesHelper.PASSWORD_VALID })
  password: string;

  @ApiProperty({
    description: 'Defines whether the user is active or not',
    default: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  status: number;
}
