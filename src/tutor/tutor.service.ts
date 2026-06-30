import { Injectable } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

@Injectable()
export class TutorService {
  create(createTutorDto: CreateTutorDto, file: Buffer) {
    return {
      tutor: createTutorDto,
      file: file,
    };
  }

  findAll(subject?: string) {
    if (subject) {
      return `Found all tutors teaching ${subject}`;
    }
    return `Found all tutors`;
  }

  findOne(id: number) {
    return `Found tutor with ID: ${id}`;
  }

  update(id: number, updateTutorDto: UpdateTutorDto) {
    return {
      id,
      updatedData: updateTutorDto,
    };
  }

  remove(id: number) {
    return `Deleted tutor with ID: ${id}`;
  }

  replace(id: number, createTutorDto: CreateTutorDto) {
    return {
      id,
      tutor: createTutorDto,
    };
  }

  addSchedule(id: number, timeSlot: string) {
    return `Found tutor with ID: ${id} and added schedule for slot: ${timeSlot}`;
  }

  getSchedule(id: number, date: string) {
    return `Found tutor with ID: ${id} and retrieved schedule for date: ${date}`;
  }
}
