import {
  IsString,
  MinLength,
} from 'class-validator';

export class ResolveComplaintDto {

  @IsString()
  @MinLength(5)
  resolution!: string;

}