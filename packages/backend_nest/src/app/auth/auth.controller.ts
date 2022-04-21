import { Controller, Get, Post, Body, Put, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LoginDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Post('logout')
  async logout(@Body() token: LoginDto) {
    return await this.authService.login(token);
  }

  @Post('register')
  async register(@Body() data: LoginDto) {
    return await this.authService.login(data);
  }

  @Get('me')
  async me() {
    return await this.authService.me();
  }
}
