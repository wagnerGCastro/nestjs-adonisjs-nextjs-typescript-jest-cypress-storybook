import { Module } from '@nestjs/common';
import { InsterfaceService } from './insterface/insterface.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [InsterfaceService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
