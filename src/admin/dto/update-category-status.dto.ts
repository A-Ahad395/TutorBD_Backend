import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateCategoryStatusDto {
  @IsNotEmpty()
  @IsString()
  status!: string;
}