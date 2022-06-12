import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBService } from './db.service';
import { DBController } from './db.controller';
import { User } from './database/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [DBController],
  providers: [DBService],
})
export class DBModule {}
