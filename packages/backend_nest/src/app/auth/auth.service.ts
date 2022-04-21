import { Injectable } from '@nestjs/common';
import { AuthResponse, LoginDto } from './dto/create-auth.dto';
import { UserEntity } from 'src/app/user/user.entity';
import { UserService } from 'src/app/user/user.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(data: LoginDto): Promise<AuthResponse> {
    console.log(data);
    return {
      token: 'jwt token',
      permissions: ['super_admin', 'customer'],
    };
  }

  async logout(token: LoginDto) {
    console.log(token);
  }

  me(): string {
    return 'this.users[0];';
  }

  async validateUser(email: string, password: string) {
    let user: UserEntity;

    try {
      user = await this.userService.findOneOrFail({ email });
    } catch (error) {
      console.log('error validate user =>', error);
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
