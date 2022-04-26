import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './app/common/common.module';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';

import ormconfig from './config/database/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), CommonModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
