import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsNumberString,
} from 'class-validator';

export class CreateTutorDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsNotEmpty()
  @IsNumberString({}, { message: 'Phone must contain only numeric digits.' })
  phone!: string;
}

export class UpdatePhoneDto {
  @IsNotEmpty()
  @IsNumberString({}, { message: 'Phone must contain only numeric digits.' })
  phone!: string;
}
