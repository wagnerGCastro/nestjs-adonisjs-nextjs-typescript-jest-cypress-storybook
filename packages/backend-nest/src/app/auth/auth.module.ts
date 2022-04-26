import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/app/user/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { API_JWT_SECRET_KEY, API_JWT_EXPIRES_IN } from 'src/config/constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      privateKey: API_JWT_SECRET_KEY,
      signOptions: { expiresIn: API_JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
