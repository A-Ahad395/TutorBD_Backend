import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSubjectDto {
  @IsString({
    message: 'Subject name must be a string',
  })
  @IsNotEmpty({
    message: 'Subject name is required',
  })
  name!: string;

  @IsString({
    message: 'Description must be a string',
  })
  @IsNotEmpty({
    message: 'Description is required',
  })
  description!: string;
}