import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class CreateTutorDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  subject!: string;

  @IsNumber()
  @IsNotEmpty()
  hourlyRate!: number;
}
