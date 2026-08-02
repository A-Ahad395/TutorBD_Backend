import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString({
    message: 'Name must be a string',
  })
  @MaxLength(150, {
    message: 'Name must not exceed 150 characters',
  })
  name?: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'Email must be valid',
    },
  )
  email?: string;

  @IsOptional()
  @IsString({
    message: 'Phone must be a string',
  })
  @MaxLength(20, {
    message: 'Phone must not exceed 20 characters',
  })
  phone?: string;

  @IsOptional()
  @IsString({
    message: 'Password must be a string',
  })
  @MinLength(6, {
    message: 'Password must be at least 6 characters',
  })
  password?: string;

  @IsOptional()
  @IsString({
    message: 'Address must be a string',
  })
  @MaxLength(255, {
    message: 'Address must not exceed 255 characters',
  })
  address?: string;
}