import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  MinLength,
  MaxLength,
  IsOptional,
  IsEnum,
} from 'class-validator';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

export class CreateModeratorDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  fullName!: string;

  @IsEmail()
  email!:  string;
  

  @MinLength(6)
  @MaxLength(20)
  password!:  string;

  @IsPhoneNumber('BD')
  phone!:  string;

  @IsEnum(Gender)
  gender!:  Gender;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  photo?: string;
}