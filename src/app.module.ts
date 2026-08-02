import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { ModeratorModule } from './moderator/moderator.module';
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
    ModeratorModule,
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
})
export class AppModule {}