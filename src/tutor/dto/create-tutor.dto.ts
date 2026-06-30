import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEmail,
  Matches,
  Min,
  Max,
  MinLength,
} from 'class-validator';

export class CreateTutorDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Name must contain only alphabets and spaces.',
  })
  name!: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide a valid email format.' })
  @Matches(/\.xyz$/)
  email!: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?:\d{10}|\d{13}|\d{17})$/, {
    message:
      'Invalid NID number. It must be exactly 10, 13, or 17 numeric digits long.',
  })
  nidNumber!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 6 characters long.' })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase character.',
  })
  @Matches(/(?=.*[@#$&])/, {
    message:
      'Password must contain at least one special character (@, #, $, or &).',
  })
  password!: string;

  @IsNotEmpty()
  @IsString()
  subject!: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(100)
  @Max(10000)
  hourlyRate!: number;
}
