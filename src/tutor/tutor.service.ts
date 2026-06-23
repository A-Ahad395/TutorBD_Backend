import { Injectable } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';

@Injectable()
export class TutorService {
  create(createTutorDto: CreateTutorDto) {
    return `New tutor created with name: ${createTutorDto.name}`;
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
    return `Found tutor with ID: ${id}`;
  }

  remove(id: number) {
    return `Found tutor with ID: ${id}`;
  }

  replace(id: number, createTutorDto: CreateTutorDto) {
    return `Found tutor with ID: ${id} and replaced with new data: ${createTutorDto.name}`;
  }

  addSchedule(id: number, timeSlot: string) {
    return `Found tutor with ID: ${id} and added schedule for slot: ${timeSlot}`;
  }

  getSchedule(id: number, date: string) {
    return `Found tutor with ID: ${id} and retrieved schedule for date: ${date}`;
  }
}
