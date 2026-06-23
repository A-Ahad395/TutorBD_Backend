import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TutorModule } from './tutor/tutor.module';

@Module({
  imports: [AdminModule, TutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}