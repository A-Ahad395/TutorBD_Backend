import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookingDto {

  @IsInt({
    message: 'Student ID must be an integer',
  })
  @IsNotEmpty({
    message: 'Student ID is required',
  })
  studentId!: number;

  @IsInt({
    message: 'Tutor ID must be an integer',
  })
  @IsNotEmpty({
    message: 'Tutor ID is required',
  })
  tutorId!: number;

  @IsString({
    message: 'Subject must be a string',
  })
  @IsNotEmpty({
    message: 'Subject is required',
  })
  @MaxLength(100, {
    message: 'Subject must not exceed 100 characters',
  })
  subject!: string;

  @IsString({
    message: 'Date must be a string',
  })
  @IsNotEmpty({
    message: 'Date is required',
  })
  date!: string;

  @IsString({
    message: 'Time slot must be a string',
  })
  @IsNotEmpty({
    message: 'Time slot is required',
  })
  @MaxLength(50, {
    message: 'Time slot must not exceed 50 characters',
  })
  timeSlot!: string;

}