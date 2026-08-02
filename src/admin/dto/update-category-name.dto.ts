import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateCategoryNameDto {
  @IsNotEmpty()
  @IsString()
  name!: string;
}