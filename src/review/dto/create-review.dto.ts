import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Max,
  Min,
} from 'class-validator';

export class CreateReviewDto {

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


  @IsNumber(
    {},
    {
      message: 'Rating must be a number',
    },
  )
  @IsNotEmpty({
    message: 'Rating is required',
  })
  @Min(1, {
    message: 'Rating minimum is 1',
  })
  @Max(5, {
    message: 'Rating maximum is 5',
  })
  rating!: number;


  @IsString({
    message: 'Comment must be a string',
  })
  @IsNotEmpty({
    message: 'Comment is required',
  })
  @MaxLength(255, {
    message: 'Comment must not exceed 255 characters',
  })
  comment!: string;

}