import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateReviewDto {

  @IsOptional()
  @IsNumber(
    {},
    {
      message: 'Rating must be a number',
    },
  )
  @Min(1, {
    message: 'Rating minimum is 1',
  })
  @Max(5, {
    message: 'Rating maximum is 5',
  })
  rating?: number;


  @IsOptional()
  @IsString({
    message: 'Comment must be a string',
  })
  @MaxLength(255, {
    message: 'Comment must not exceed 255 characters',
  })
  comment?: string;

}