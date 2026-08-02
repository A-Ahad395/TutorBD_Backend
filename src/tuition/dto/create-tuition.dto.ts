import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTuitionDto {

  @IsString({
    message: 'Title must be a string',
  })
  @IsNotEmpty({
    message: 'Title is required',
  })
  @MaxLength(100, {
    message: 'Title must not exceed 100 characters',
  })
  title!: string;


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
    message: 'Class name must be a string',
  })
  @IsNotEmpty({
    message: 'Class name is required',
  })
  @MaxLength(100, {
    message: 'Class name must not exceed 100 characters',
  })
  className!: string;


  @IsString({
    message: 'Location must be a string',
  })
  @IsNotEmpty({
    message: 'Location is required',
  })
  @MaxLength(100, {
    message: 'Location must not exceed 100 characters',
  })
  location!: string;


  @IsString({
    message: 'Salary must be a string',
  })
  @IsNotEmpty({
    message: 'Salary is required',
  })
  @MaxLength(20, {
    message: 'Salary must not exceed 20 characters',
  })
  salary!: string; 

}