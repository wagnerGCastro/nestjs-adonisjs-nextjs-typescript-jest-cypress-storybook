import { Injectable } from '@nestjs/common';
import { AuthResponse, LoginDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
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
}
