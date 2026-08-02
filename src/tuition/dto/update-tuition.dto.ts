import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateTuitionDto {

  @IsOptional()
  @IsString({
    message: 'Title must be a string',
  })
  @MaxLength(100, {
    message: 'Title must not exceed 100 characters',
  })
  title?: string;


  @IsOptional()
  @IsString({
    message: 'Subject must be a string',
  })
  @MaxLength(100, {
    message: 'Subject must not exceed 100 characters',
  })
  subject?: string;


  @IsOptional()
  @IsString({
    message: 'Class name must be a string',
  })
  @MaxLength(100, {
    message: 'Class name must not exceed 100 characters',
  })
  className?: string;


  @IsOptional()
  @IsString({
    message: 'Location must be a string',
  })
  @MaxLength(100, {
    message: 'Location must not exceed 100 characters',
  })
  location?: string;


  @IsOptional()
  @IsString({
    message: 'Salary must be a string',
  })
  @MaxLength(20, {
    message: 'Salary must not exceed 20 characters',
  })
  salary?: string;


  @IsOptional()
  @IsString({
    message: 'Status must be a string',
  })
  @MaxLength(20, {
    message: 'Status must not exceed 20 characters',
  })
  status?: string;

}