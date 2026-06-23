import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TutorModule } from './tutor/tutor.module';
import { StudentModule } from './student/student.module';

@Module({
<<<<<<< Updated upstream
  imports: [AdminModule, TutorModule],
=======
  imports: [TutorModule, StudentModule],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}