import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorService } from './tutor.service';
import { TutorController } from './tutor.controller';
import { Tutor } from './entities/tutor.entity';
import { Qualification } from './entities/qualification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tutor, Qualification])],
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
