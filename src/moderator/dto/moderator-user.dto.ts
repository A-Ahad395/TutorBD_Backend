import {
  IsString,
  IsNotEmpty,
  Matches,
  MinLength,
} from 'class-validator';

export class ModeratorUserDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Za-z0-9 ]+$/, {
    message: 'Name must not contain special characters',
  })
  name!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'Password must be at least 6 characters',
  })
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter',
  })
  password!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^01\d{9}$/, {
    message: 'Phone number must start with 01',
  })
  phone!: string;
}