import {
  IsOptional,
  IsString,
  IsPhoneNumber,
  IsEnum,
} from 'class-validator';

import { Gender } from './create-moderator.dto';

export class UpdateModeratorDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsPhoneNumber('BD')
  phone?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  photo?: string;
}