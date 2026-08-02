import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Max,
  Min,
} from 'class-validator';

export class ReplaceReviewDto {

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

  @IsInt({
    message: 'Rating must be an integer',
  })
  @Min(1, {
    message: 'Rating must be at least 1',
  })
  @Max(5, {
    message: 'Rating must not exceed 5',
  })
  rating!: number;

  @IsString({
    message: 'Comment must be a string',
  })
  @IsNotEmpty({
    message: 'Comment is required',
  })
  @MaxLength(500, {
    message: 'Comment must not exceed 500 characters',
  })
  comment!: string;

}