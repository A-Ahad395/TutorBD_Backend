import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tuition } from './tuition.entity';
import { TuitionController } from './tuition.controller';
import { TuitionService } from './tuition.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Tuition,
    ]),
  ],
  controllers: [
    TuitionController,
  ],
  providers: [
    TuitionService,
  ],
})
export class TuitionModule {}