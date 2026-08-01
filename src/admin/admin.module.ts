import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';
import { Subject } from './subject.entity';
import { Category } from './category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Admin,
      Subject,
      Category,
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}