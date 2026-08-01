import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateSubjectStatusDto {
  @IsNotEmpty()
  @IsString()
  status!: string;
}