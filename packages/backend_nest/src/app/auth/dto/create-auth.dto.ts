import { PartialType, PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/app/user/user.entity';

export class RegisterDto extends PickType(UserEntity, ['fullname', 'email', 'password']) {}

export class LoginDto extends PartialType(PickType(UserEntity, ['email', 'password'])) {}

export class ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export class ForgetPasswordDto {
  email: string;
}
export class VerifyForgetPasswordDto {
  email: string;
  token: string;
}

export class ResetPasswordDto {
  email: string;
  token: string;
  password: string;
}

export class AuthResponse {
  token: string;
  permissions: string[];
}

export class VerifyOtpDto {
  otp_id: string;
  code: string;
  phone_number: string;
}

export class OtpResponse {
  id: string;
  message: string;
  success: boolean;
  phone_number: string;
  provider: string;
  is_contact_exist: boolean;
}
export class OtpDto {
  phone_number: string;
}

export class OtpLoginDto {
  otp_id: string;
  code: string;
  phone_number: string;
  name?: string;
  email?: string;
}
