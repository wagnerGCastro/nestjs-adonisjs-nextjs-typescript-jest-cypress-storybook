import { PickType, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { UserEntity } from 'src/app/user/user.entity';

import { messagesHelper, regexPassdHelper } from 'src/utils/helpers';

export class RegisterDto extends PickType(UserEntity, ['fullname', 'email', 'password']) {
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
}
