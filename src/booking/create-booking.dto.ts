import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookingDto {

  @IsNumber(
    {},
    {
      message: 'Student ID must be a number',
    },
  )
  @IsNotEmpty({
    message: 'Student ID is required',
  })
  studentId!: number;


  @IsNumber(
    {},
    {
      message: 'Tutor ID must be a number',
    },
  )
  @IsNotEmpty({
    message: 'Tutor ID is required',
  })
  tutorId!: number;


  @IsString({
    message: 'Message must be a string',
  })
  @IsNotEmpty({
    message: 'Message is required',
  })
  @MaxLength(255, {
    message: 'Message must not exceed 255 characters',
  })
  message!: string;

}