import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorModule } from './tutor/tutor.module';
import { Tutor } from './tutor/entities/tutor.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [Tutor],
        synchronize: true,
      }),
    }),

    TutorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
