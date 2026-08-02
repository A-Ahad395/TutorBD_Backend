import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsString({
    message: 'Name must be a string',
  })
  @IsNotEmpty({
    message: 'Name is required',
  })
  @MaxLength(150, {
    message: 'Name must not exceed 150 characters',
  })
  name!: string;

  @IsEmail(
    {},
    {
      message: 'Email must be valid',
    },
  )
  @IsNotEmpty({
    message: 'Email is required',
  })
  email!: string;

  @IsString({
    message: 'Phone must be a string',
  })
  @IsNotEmpty({
    message: 'Phone is required',
  })
  @MaxLength(20, {
    message: 'Phone must not exceed 20 characters',
  })
  phone!: string;

  @IsString({
    message: 'Password must be a string',
  })
  @IsNotEmpty({
    message: 'Password is required',
  })
  @MinLength(6, {
    message: 'Password must be at least 6 characters',
  })
  password!: string;

  @IsString({
    message: 'Address must be a string',
  })
  @IsNotEmpty({
    message: 'Address is required',
  })
  @MaxLength(255, {
    message: 'Address must not exceed 255 characters',
  })
  address!: string;
}