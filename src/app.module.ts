import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminModule } from './admin/admin.module';
import { TutorModule } from './tutor/tutor.module';
import { StudentModule } from './student/student.module';
<<<<<<< Updated upstream

@Module({
<<<<<<< Updated upstream
  imports: [AdminModule, TutorModule],
=======
  imports: [TutorModule, StudentModule],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService],
=======
import { TutorModule } from './tutor/tutor.module';
import { PaymentModule } from './payment/payment.module';
import { TuitionModule } from './tuition/tuition.module';
import { BookingModule } from './booking/booking.module';
import { ReviewModule } from './review/review.module';


@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
    }),


    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),


    AdminModule,
    StudentModule,
    TutorModule,
    PaymentModule,
    TuitionModule,
    BookingModule,
    ReviewModule,

  ],

  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
>>>>>>> Stashed changes
})
export class AppModule {}