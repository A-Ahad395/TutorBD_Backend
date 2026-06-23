import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorModule } from './tutor/tutor.module';

@Module({
  imports: [TutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
