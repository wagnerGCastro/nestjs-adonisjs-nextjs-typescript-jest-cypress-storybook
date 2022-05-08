import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/create-auth.dto';
import { UserEntity } from 'src/app/user/user.entity';
import { UserService } from 'src/app/user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { users } from 'src/utils/data/fakers/users';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async login(user: LoginDto) {
    console.log(user);
    const payload = {
      sub: user.id,
      email: user.email,
      firstName: user.first_name,
      // role: user.role,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async logout(token: LoginDto) {
    console.log(token);
  }

  me(): string {
    return 'this.users[0];';
  }

  async validateUser(email: string, password: string) {
    let user: any;

    try {
      // user = await this.userService.findOneOrFail({ email });
      user = users.find((u) => u.email === email);
    } catch (error) {
      console.log('error validate user =>', error);
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
