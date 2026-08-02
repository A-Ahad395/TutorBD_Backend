import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAdminDto {
  @IsString({
    message: 'Username must be a string',
  })
  @IsNotEmpty({
    message: 'Username is required',
  })
  @MaxLength(100, {
    message: 'Username must not exceed 100 characters',
  })
  username!: string;

  @IsString({
    message: 'Full name must be a string',
  })
  @IsNotEmpty({
    message: 'Full name is required',
  })
  @MaxLength(150, {
    message: 'Full name must not exceed 150 characters',
  })
  fullName!: string;
}