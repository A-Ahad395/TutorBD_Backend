import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateSubjectNameDto {
  @IsNotEmpty()
  @IsString()
  name!: string;
}