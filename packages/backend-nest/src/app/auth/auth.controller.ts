import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any) {
    return await this.authService.login(req.user);
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
    return this.authService.me();
  }
}
