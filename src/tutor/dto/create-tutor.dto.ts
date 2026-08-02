import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateTutorDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsNotEmpty()
  @IsString()
  phone?: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password?: string;
}
