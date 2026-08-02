import { IsString, IsNotEmpty } from 'class-validator';

export class CreateQualificationDto {
  @IsNotEmpty()
  @IsString()
  degreeName?: string;

  @IsNotEmpty()
  @IsString()
  institution?: string;
}
