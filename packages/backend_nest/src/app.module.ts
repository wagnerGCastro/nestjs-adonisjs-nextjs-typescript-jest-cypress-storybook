import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './api/common/common.module';
import { UserModule } from './api/user/user.module';

import ormconfig from './config/database/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), CommonModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
